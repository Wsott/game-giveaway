import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { fetchGame, formatearFecha } from "../../typescript/Functions";
import style from "../../css/Components.module.css";
import Loading from "../loading/Loading";

export default function GameInfo () {
    const {id} = useParams();
    const {data, isLoading} = useQuery(["game", id], () => fetchGame(id));

    return (
        <>
            {
                (isLoading)?
                    <Loading/>
                :
                <div className={style.gameInfoContainer}>
                    <div className={style.mainContent}>
                        <div className={style.headerContainer}>
                            <img className={style.headerImage} src={data.thumbnail} alt={data.title} />
                            <div className={style.headerInfoContainer}>
                                <p className={style.bigTitle}>{data.title}</p>
                                <p className={style.headerText}>{(data.type == "Game")? "Juego" : data.type} | {data.platforms}</p>
                                <p className={style.headerText}><b>Precio:</b> <span className={style.crossedText}>{data.worth}</span> <b>GRATIS</b></p>
                            </div>
                            <div className={style.gameClaimContainer}>
                                <div>
                                    <b>Disponible hasta...</b>
                                    <p>{(data.end_date != "N/A")? formatearFecha(data.end_date) : "Tiempo limitado!"}</p>
                                </div>
                                <br/>
                                <div>
                                    <Link className={style.claimButton} to={data.open_giveaway_url}>
                                        <button>Reclamar este juego</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={style.gameInfoDescription}>
                            <p className={style.importantText}>Instrucciones (ingles):</p>
                            {
                                data.instructions.split("\r\n").map ((actual: string, key: number) => {
                                    return (
                                        <p key={key}>{actual}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                </div>
            }
        </>
    );
}