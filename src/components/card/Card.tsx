import { useQuery } from "react-query";
import style from "../../css/Components.module.css";
import axios from "axios";

const mockData = {
    "id": 1155,
    "title": "Europa Universalis IV (Epic Games) Giveaway",
    "worth": "$39.99",
    "thumbnail": "https://www.gamerpower.com/offers/1/6155d602ceab4.jpg",
    "image": "https://www.gamerpower.com/offers/1b/6155d602ceab4.jpg",
    "description": "Score Europa Universalis IV without any cost on Epic Games Store! Europa Universalis IV is a strategy game from Paradox Interactive! Don´t miss this amazing classic!",
    "instructions": "1. Login into your Epic Games Store account.\r\n2. Click the button to add the game to your library",
    "open_giveaway_url": "https://www.gamerpower.com/open/europa-universalis-iv",
    "published_date": "2023-08-10 11:00:50",
    "type": "Game",
    "platforms": "PC, Epic Games Store",
    "end_date": "2023-08-17 23:59:00",
    "users": 7650,
    "status": "Active",
    "gamerpower_url": "https://www.gamerpower.com/europa-universalis-iv"
}

// async function fetchData (plataforma: string) {
//     const options = {
//         method: 'GET',
//         url: 'https://gamerpower.p.rapidapi.com/api/giveaways?platform=' + plataforma,
//         headers: {
//             'X-RapidAPI-Key': 'b07370299dmsh4b98a0bfd7af1a8p17260ajsn7018346b3344',
//             'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
//         }
//     };
//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
//     /*const res = await fetch("https://www.gamerpower.com/api/giveaways?platform=" + plataforma, {mode: "no-cors"});
//     if (!res.ok) {
//         console.log(res);
//         throw new Error ("ERROR");
//     }*/
//     //return res.json();
// }

export interface cardData {
    image: string;
    title: string;
    type: string;
    worth: string;
    end_date: string;
    platforms: string;
}

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
                <p><b>Disponible hasta:</b> {end_date.split(" ")[0]}</p>
                <p><b>Tags:</b> <i>{platforms}</i></p>
            </div>
        </div>
    );
}