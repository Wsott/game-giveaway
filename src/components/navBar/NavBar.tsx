import { Link } from "react-router-dom";
import style from "../../css/Components.module.css";
import { useEffect, useState } from "react";

export default function NavBar () {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

  const checkWindowSize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);
    
    return (
        <div className={style.navbarContainer}>
            {
                (isMobile)?
                    <>
                        <div className={style.mobileMenuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                            ☰
                        </div>
                        <div className={`${style.menuItems} ${menuOpen ? style.open : ""}`}>
                            <Link to={"/"}>Inicio</Link>
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
                    </>
                :
                    <>
                        <Link to={"/"}>Inicio</Link>
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
                    </>
            }
        </div>
    );
}