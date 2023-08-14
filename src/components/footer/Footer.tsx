import style from "../../css/Components.module.css";

export default function Footer () {
    return (
        <div className={style.footerContainer}>
            <p>Powered by <a href="https://www.gamerpower.com/about">GamerPower</a></p>
            <p>Pagina hecha por <a href="https://github.com/Wsott">Gomez Olivera Emiliano</a> usando React</p>
        </div>
    );
}