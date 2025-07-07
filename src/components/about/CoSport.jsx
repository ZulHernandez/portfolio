import { useContext} from "react";
import { MyContext } from "../context/MyContext";

import imgSport from "../../assets/imgs/about/sport/foto.webp";
import apnea from "../../assets/imgs/about/sport/apnea.svg";
import back from "../../assets/imgs/about/sport/back.svg";
import breast from "../../assets/imgs/about/sport/breast.svg";
import fly from "../../assets/imgs/about/sport/fly.svg";
import free from "../../assets/imgs/about/sport/free.svg";

const CoSport = () => {
    const { language } = useContext(MyContext);

    const styles = [
        {
            icon: apnea,
            text: language == "ES" ? "Apnea" : "Apnea",
        },
        {
            icon: back,
            text: language == "ES" ? "Dorso" : "Backstroke",
        },
        {
            icon: free,
            text: language == "ES" ? "Libre" : "Free",
        },
        {
            icon: breast,
            text: language == "ES" ? "Pecho" : "Breaststroke",
        },
        {
            icon: fly,
            text: language == "ES" ? "Mariposa" : "Butterfly",
        },
    ];

    return (
        <div className="tab-body">
            <div className="tab-content">
                <div
                    className="div-img"
                    style={{ backgroundImage: "url(" + imgSport + ")" }}
                ></div>
                <div className="tab-content__body">
                    <div className="tab-content__info">
                        <div className="tab-content__info-text">
                            <h2>
                                {language == "ES" ? "Me encanta nadar" : "I love swimming"}
                            </h2>
                            <span className="text-normal">
                                {language == "ES"
                                    ? "Llevo nadando ya más de un año y no podría estar más enamorado de este deporte, es una sensación increíble el poder perderse en el agua después de un día de trabajo."
                                    : "I have been swimming for more than a year now and I couldn't be more in love with this sport, it is an incredible feeling to be able to get lost in the water after a day of work."}
                                <br />
                                <br />
                                {language == "ES"
                                    ? "Si tuviera que calificar que hacer un tier-list de que estilo me gusta más..."
                                    : "If I had to rate what style I like the most..."}
                            </span>
                            <div className="tab-content__info-text__list">
                                {styles.map((style, index) => (
                                    <div
                                        key={index}
                                        className="tab-content__info-text__list-item"
                                        style={{ opacity: 1 - index * 0.2 }}
                                    >
                                        <img loading="lazy" src={style.icon} alt={style.text} />
                                        <span>{style.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoSport;