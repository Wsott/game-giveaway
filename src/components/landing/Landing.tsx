import style from "../../css/Components.module.css";

export default function Landing () {
    return (
        <div className={style.landingContainer}>
            <div className={style.landingText}>
                <p>
                Esta pagina fue hecha para ver que juegos estan gratis en diferentes plataformas como 
                Steam, Epic Games, GOG, itch.io, entre otras.
                </p>
                <br />
                <p>
                    Principalmente esta pensada para Epic Games y Steam.
                </p>
            </div>
            <img className={style.landingImage} src="icon.png" alt="Un gran trato" />
        </div>
    );
}