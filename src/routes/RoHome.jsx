import CoHola from "../components/home/CoHola.jsx";
import CoColab from "../components/home/CoColab.jsx";
import CoTrabajos from "../components/home/CoTrabajos.jsx";
import CoConozca from "../components/home/CoConozca.jsx";
import CoNavLeft from "../components/general/CoNavLeft.jsx";

import { useContext } from "react";
import { MyContext } from "../components/context/MyContext.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RoHome = () => {
    const { setRuta, setAmplio } = useContext(MyContext);
    const location = useLocation();

    // Mover la actualización de estado a useEffect
    useEffect(() => {
        setRuta("/"); // Se ejecuta después del renderizado inicial
    }, []); // Se ejecuta solo una vez al montar el componente

    useEffect(() => {
        setAmplio(false); // Reset amplio on route change
    }, [location.pathname]);

    return (
        <>
            <CoNavLeft />
            <div>
                <CoHola />
                <CoColab />
                <CoTrabajos />
                <CoConozca />
            </div>
        </>
    );
};

export default RoHome;
