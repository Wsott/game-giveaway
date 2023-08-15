import style from "../../css/Components.module.css";
import Card from "../card/Card";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../loading/Loading";
import { jsonData } from "../../typescript/Interfaces";
import { fetchData } from "../../typescript/Functions";

export default function Grid () {
    const {platform}: any = useParams();
    const {data, isLoading} = useQuery(['data', platform], () => fetchData(platform));

    return (
        <div className={style.gridContainer}>
            {
                (isLoading)?
                    <Loading/>
                :
                    data.map((actual: jsonData, key: number) => {
                        return (
                            <Link to={"/giveaway/" + actual.id}>
                                <Card 
                                    key={key}
                                    image={actual.thumbnail} 
                                    title={actual.title} 
                                    type={actual.type} 
                                    worth={actual.worth} 
                                    end_date={actual.end_date} 
                                    platforms={actual.platforms}/>
                            </Link>
                        )
                    })    
            }
        </div>
    );
}