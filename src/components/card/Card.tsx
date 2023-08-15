import style from "../../css/Components.module.css";
import { formatearFecha } from "../../typescript/Functions";
import { cardData } from "../../typescript/Interfaces";

export default function Card({image, title, type, worth, end_date, platforms}: cardData) {
    return (
        <div className={style.cardContainer}>
            <div className={style.cardImageContainer}>
                <img className={style.cardImage} src={image} alt={"Image of " + title} />
            </div>
            <div className={style.cardBodyContainer}>
                <p className={style.title}>{title}</p>
                <p><b>Tipo:</b> {(type == "Game")? "Juego": type}</p>
                <p><b>Vale:</b> <span className={style.crossedText}>{worth}</span></p>
                <p><b>Disponible hasta:</b> {(end_date != "N/A")? formatearFecha(end_date) : "Tiempo limitado!"}</p>
                <p><b>Tags:</b> <i>{platforms}</i></p>
            </div>
        </div>
    );
}