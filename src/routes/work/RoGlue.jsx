import { useContext, useEffect, useState, useRef } from "react";
import { MyContext } from "../../components/context/MyContext.js";
import { useLocation } from "react-router-dom";

import CoConozca from "../../components/general/CoConozca.jsx";
import CoNavLeft from "../../components/general/CoNavLeft.jsx";

const RoGlue = () => {
    return (
        <div className="route-container">
            <CoNavLeft />
            <div className="route-content">
                <h1>Glue</h1>
                <p>This is the Glue page.</p>
            </div>
        </div>
    );
};

export default RoGlue;