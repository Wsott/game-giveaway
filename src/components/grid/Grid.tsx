import axios from "axios";
import style from "../../css/Components.module.css";
import Card from "../card/Card";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

interface jsonData {
    "id": number;
    "title": string;
    "worth": string;
    "thumbnail": string;
    "image": string;
    "description": string;
    "instructions": string;
    "open_giveaway_url": string;
    "published_date": string;
    "type": string;
    "platforms": string;
    "end_date": string;
    "users": number;
    "status": string;
    "gamerpower_url": string;
    "open_giveaway": string;
}

async function fetchData (plataforma: string) {
    const options = {
        method: 'GET',
        url: 'https://gamerpower.p.rapidapi.com/api/giveaways?platform=' + plataforma,
        headers: {
            'X-RapidAPI-Key': 'b07370299dmsh4b98a0bfd7af1a8p17260ajsn7018346b3344',
            'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default function Grid () {
    const {platform}: any = useParams();
    let {data, isLoading, error} = useQuery(['data', platform], () => fetchData(platform));

    return (
        <div className={style.gridContainer}>
            {
                (isLoading)?
                    null
                :
                    data.map((actual: jsonData, key: number) => {
                        return (
                            <Card 
                                key={key}
                                image={actual.thumbnail} 
                                title={actual.title} 
                                type={actual.type} 
                                worth={actual.worth} 
                                end_date={actual.end_date} 
                                platforms={actual.platforms}/>
                        )
                    })    
            }
        </div>
    );
}