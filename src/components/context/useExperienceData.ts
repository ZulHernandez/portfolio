import { useEffect, useState } from "react";
import type { ExperienceData } from "../../types";

// public/data/experience.json se sirve tal cual (Vite copia todo public/ a
// dist/ sin tocarlo) y se pide en runtime, no se importa al bundle. Esa es
// la pieza clave para poder "dar de alta" un trabajo nuevo subiendo solo ese
// archivo al servidor (por FTP/Administrador de archivos, o vía el workflow
// ligero .github/workflows/update-data.yml) sin rehacer un build completo.
const DATA_URL = "/data/experience.json";

// Módulo compartido entre las 3 pantallas que lo consumen (CoTimeline,
// CoColab, RoResume): la primera que monta dispara el fetch, las demás
// reciben la misma promesa en vez de repetir la petición.
let cache: ExperienceData | null = null;
let inflight: Promise<ExperienceData> | null = null;

const loadExperienceData = (): Promise<ExperienceData> => {
	if (cache) return Promise.resolve(cache);
	if (!inflight) {
		inflight = fetch(DATA_URL)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`No se pudo cargar ${DATA_URL} (HTTP ${res.status})`);
				}
				return res.json() as Promise<ExperienceData>;
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

interface UseExperienceDataResult {
	data: ExperienceData | null;
	error: Error | null;
	loading: boolean;
}

/** Trabajos/colaboraciones compartidos entre timeline, "where I have collaborated" y resume. */
const useExperienceData = (): UseExperienceDataResult => {
	const [data, setData] = useState<ExperienceData | null>(cache);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (cache) return;
		let cancelled = false;

		loadExperienceData()
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

export default useExperienceData;
