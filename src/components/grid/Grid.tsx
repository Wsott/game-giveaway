import style from "../../css/Components.module.css";
import Card from "../card/Card";

export default function Grid () {
    return (
        <div className={style.gridContainer}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}