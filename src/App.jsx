import React from "react";
import { useState, useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MyContext } from "./components/context/MyContext";
import { preloadable } from "./utils/preloadable";

// 🎯 Carga inmediata
import CoNav from "./components/general/CoNav";
import CoFooter from "./components/general/CoFooter";
import RoHome from "./routes/RoHome"; // opción: también puede ser preloadable
import RoCarga from "./routes/RoCarga"; // Carga inicial

// 🎯 Precargado (por demanda + anticipación)
const RoWorks = preloadable(() => import("./routes/RoWorks"));

// 🌀 Cargado bajo demanda
const RoResume = React.lazy(() => import("./routes/RoResume"));
const RoAbout = React.lazy(() => import("./routes/RoAbout"));
const RoError = React.lazy(() => import("./routes/RoError"));
const RoGLUE = React.lazy(() => import("./routes/works/RoGLUE"));
const RoMovilidad = React.lazy(() => import("./routes/works/RoMovilidad"));

import "./styles/style.css";

function App() {
    const [posicion, setPosicion] = useState(1);
    const [ruta, setRuta] = useState("/");
    const [language, setLanguage] = useState("ES");
    const [amplio, setAmplio] = useState(false);
    const [filtroResumen, setFiltroResumen] = useState(0);

    // 🚀 Precarga estratégica al montar la app
    useEffect(() => {
        RoWorks.preload(); // Se descarga en segundo plano
    }, []);

    return (
        <MyContext.Provider
            value={{
                posicion,
                setPosicion,
                ruta,
                setRuta,
                language,
                setLanguage,
                amplio,
                setAmplio,
                filtroResumen,
                setFiltroResumen,
            }}
        >
            <CoNav />

            <Suspense fallback={<RoCarga/>}>
                <Routes>
                    <Route path="/" element={<RoHome />} />
                    <Route path="/works" element={<RoWorks />} />
                    <Route path="/works/glue" element={<RoGLUE />} />
                    <Route path="/works/movilidad" element={<RoMovilidad />} />
                    <Route path="/resume" element={<RoResume />} />
                    <Route path="/about-me" element={<RoAbout />} />
                    <Route path="*" element={<RoError />} />
                </Routes>
            </Suspense>

            <CoFooter />
        </MyContext.Provider>
    );
}

export default App;
