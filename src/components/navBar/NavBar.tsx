import { Link } from "react-router-dom";
import style from "../../css/Components.module.css";

export default function NavBar () {
    return (
        <div className={style.navbarContainer}>
            <p>Inicio</p>
            <Link to={"/giveaway/pc"}>PC</Link>
            <Link to={"/giveaway/steam"}>Steam</Link>
            <Link to={"/giveaway/epic-games-store"}>Epic Games</Link>
            <Link to={"/giveaway/itchio"}>itch.io</Link>
            <Link to={"/giveaway/gog"}>GOG</Link>
            <Link to={"/giveaway/xbox-one"}>Xbox One</Link>
            <Link to={"/giveaway/ps4"}>PS4</Link>
            <Link to={"/giveaway/switch"}>Nintendo</Link>
            <Link to={"/giveaway/android"}>Android</Link>
            <Link to={"/giveaway/ios"}>iOS</Link>
            <Link to={"/giveaway/drm-free"}>DRM Free</Link>
        </div>
    );
}