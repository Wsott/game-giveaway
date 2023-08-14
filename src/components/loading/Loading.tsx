import style from "../../css/Components.module.css";

export default function Loading () {
    return (
        <div className={style.loaderContainer}>
            <div className={style.loader} />
            <b className={style.loaderText}>Cargando...</b>
        </div>
    );
}