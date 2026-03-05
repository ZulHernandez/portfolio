import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { MyContext } from "./components/context/MyContext";
import { preloadable } from "./utils/preloadable";

import RoHome from "./routes/RoHome";

import CoNav from "./components/general/CoNav";
import CoFooter from "./components/general/CoFooter";
import RoCarga from "./routes/RoCarga"; // Fallback de carga

// 🎯 Precargado (por demanda + anticipación)
const RoWorks = preloadable(() => import("./routes/RoWorks"));

// 🌀 Cargado bajo demanda
const RoResume = React.lazy(() => import("./routes/RoResume"));
const RoAbout = React.lazy(() => import("./routes/RoAbout"));
const RoError = React.lazy(() => import("./routes/RoError"));
const RoGLUE = React.lazy(() => import("./routes/works/RoGLUE"));
const RoMovilidad = React.lazy(() => import("./routes/works/RoMovilidad"));
const RoHUBBUB = React.lazy(() => import("./routes/works/RoHUBBUB"));

import "./styles/style.css";

function App() {
    const [posicion, setPosicion] = useState(1);
    const [ruta, setRuta] = useState("/");
    const [language, setLanguage] = useState("EN");
    const [amplio, setAmplio] = useState(false);
    const [filtroResumen, setFiltroResumen] = useState(0);

    // 🔮 Precarga anticipada (ejemplo: al estar en home)
    useEffect(() => {
        if (ruta === "/") {
            RoWorks.preload();
        }
    }, [ruta]);

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

            <Suspense fallback={<RoCarga />}>
                <Routes>
                    <Route path="/" element={<RoHome />} />
                    <Route path="/works" element={<RoWorks />} />
                    <Route path="/works/glue" element={<RoGLUE />} />
                    <Route path="/works/movilidad" element={<RoMovilidad />} />
                    <Route path="/works/hubbub" element={<RoHUBBUB />} />
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
