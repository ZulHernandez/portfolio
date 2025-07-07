import { useContext} from "react";
import { MyContext } from "../context/MyContext";
import { useEffect, useState } from "react";

import f1 from "../../assets/imgs/about/games/f1.webp";
import f2 from "../../assets/imgs/about/games/f2.webp";
import f3 from "../../assets/imgs/about/games/f3.webp";
import f4 from "../../assets/imgs/about/games/f4.webp";
import f5 from "../../assets/imgs/about/games/f5.webp";
import f6 from "../../assets/imgs/about/games/f6.webp";
import f7 from "../../assets/imgs/about/games/f7.webp";
import f8 from "../../assets/imgs/about/games/f8.webp";

const CoGames = () => {
    const { language } = useContext(MyContext);

    const [opacities, setOpacities] = useState([
        1, 0, 0, 0, 0.05, 0.1, 0.15, 0.2,
    ]);

    const frames = [f1, f2, f3, f4, f5, f6, f7, f8];

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacities((prev) => {
                const newArray = [
                    prev[prev.length - 1],
                    ...prev.slice(0, prev.length - 1),
                ]; // Moves last element to the front
                return newArray;
            });
        }, 41 * 10);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="tab-body">
            <div className="tab-content">
                <div className="tab-content__info">
                    <div className="tab-content__info-text">
                        <h2>
                            {language == "ES"
                                ? "Soy más de singleplayer..."
                                : "I prefer singleplayer games..."}
                        </h2>
                        <span className="text-normal">
                            {language == "ES"
                                ? "Me gustan los juegos donde me encuentro solo descubriendo una gran historia. Diría que mis géneros favoritos son los walking simulators, los metroid-vania y los plataformeros clasicos. Definitivamente mi juego favorito es Hollowknight."
                                : "I like games where I find myself alone discovering a great story. I would say my favorite genres are walking simulators, metroidvanias, and classic platformers. Definitely, my favorite game is Hollow Knight."}
                            <br />
                            <br />
                            <b>
                                {language == "ES"
                                    ? "P.D. Silk Song es real!"
                                    : "P.S. Silk Song is real!"}
                            </b>
                        </span>
                        <h4>
                            {language == "ES"
                                ? "... pero me encantan los juegos de mesa"
                                : "... but i also like board games"}
                        </h4>
                        <span className="text-normal">
                            {language == "ES"
                                ? "Últimamente he estado coleccionando y descubriendo juegos de mesas que me han encantado, no tengo muchos aún en mi colección pero pronto estare llenos de ellos"
                                : "Lately, I have been collecting and discovering board games that I have loved, I don't have many yet in my collection but soon I will be filled with them"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="frame-container">
                {frames.map((frame, i) => (
                    <div key={i}>
                        <img
                            loading="lazy"
                            src={frame}
                            alt={`Frame ${i + 1}`}
                            style={{ zIndex: i + 1, opacity: opacities[i] }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoGames;