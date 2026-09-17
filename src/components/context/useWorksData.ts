import { useEffect, useState } from "react";
import type { WorksData } from "../../types";

// Mismo patrón que useExperienceData.ts: public/data/works.json se sirve tal
// cual (Vite copia public/ a dist/ sin tocarlo) y se pide en runtime, no se
// importa al bundle — así se puede dar de alta/editar un caso de portafolio
// subiendo solo ese archivo, sin rehacer un build completo.
const DATA_URL = "/data/works.json";

// Módulo compartido entre los 2 consumidores (CoTrabajos de home y de
// works): el primero que monta dispara el fetch, el otro recibe la misma
// promesa en vez de repetir la petición.
let cache: WorksData | null = null;
let inflight: Promise<WorksData> | null = null;

const loadWorksData = (): Promise<WorksData> => {
	if (cache) return Promise.resolve(cache);
	if (!inflight) {
		inflight = fetch(DATA_URL)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`No se pudo cargar ${DATA_URL} (HTTP ${res.status})`);
				}
				return res.json() as Promise<WorksData>;
			})
			.then((data) => {
				cache = data;
				return data;
			})
			.catch((err: unknown) => {
				// Permite reintentar en el próximo montaje en vez de quedar
				// atascado con una promesa rechazada para siempre.
				inflight = null;
				throw err;
			});
	}
	return inflight;
};

interface UseWorksDataResult {
	data: WorksData | null;
	error: Error | null;
	loading: boolean;
}

/** Casos de portafolio compartidos entre el home ("featured works") y /works. */
const useWorksData = (): UseWorksDataResult => {
	const [data, setData] = useState<WorksData | null>(cache);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (cache) return;
		let cancelled = false;

		loadWorksData()
			.then((loaded) => {
				if (!cancelled) setData(loaded);
			})
			.catch((err: unknown) => {
				if (!cancelled) setError(err instanceof Error ? err : new Error(String(err)));
			});

		return () => {
			cancelled = true;
		};
	}, []);

	return { data, error, loading: !data && !error };
};

export default useWorksData;
