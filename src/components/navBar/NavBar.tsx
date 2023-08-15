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
                            <Link to={"/giveaways/pc"}>PC</Link>
                            <Link to={"/giveaways/steam"}>Steam</Link>
                            <Link to={"/giveaways/epic-games-store"}>Epic Games</Link>
                            <Link to={"/giveaways/itchio"}>itch.io</Link>
                            <Link to={"/giveaways/gog"}>GOG</Link>
                            <Link to={"/giveaways/xbox-one"}>Xbox One</Link>
                            <Link to={"/giveaways/ps4"}>PS4</Link>
                            <Link to={"/giveaways/switch"}>Nintendo</Link>
                            <Link to={"/giveaways/android"}>Android</Link>
                            <Link to={"/giveaways/ios"}>iOS</Link>
                            <Link to={"/giveaways/drm-free"}>DRM Free</Link>
                        </div>
                    </>
                :
                    <>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/giveaways/pc"}>PC</Link>
                        <Link to={"/giveaways/steam"}>Steam</Link>
                        <Link to={"/giveaways/epic-games-store"}>Epic Games</Link>
                        <Link to={"/giveaways/itchio"}>itch.io</Link>
                        <Link to={"/giveaways/gog"}>GOG</Link>
                        <Link to={"/giveaways/xbox-one"}>Xbox One</Link>
                        <Link to={"/giveaways/ps4"}>PS4</Link>
                        <Link to={"/giveaways/switch"}>Nintendo</Link>
                        <Link to={"/giveaways/android"}>Android</Link>
                        <Link to={"/giveaways/ios"}>iOS</Link>
                        <Link to={"/giveaways/drm-free"}>DRM Free</Link>
                    </>
            }
        </div>
    );
}