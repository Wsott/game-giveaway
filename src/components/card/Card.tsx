import style from "../../css/Components.module.css";

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

export default function Card() {
    return (
        <div className={style.cardContainer}>
            <div className={style.cardImageContainer}>
                <img className={style.cardImage} src={mockData.thumbnail} alt={mockData.title} />
            </div>
            <div className={style.cardBodyContainer}>
                <b>{mockData.title}</b>
            </div>
        </div>
    );
}