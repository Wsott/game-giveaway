import axios from "axios";

export async function fetchData (plataforma: string) {
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

export async function fetchGame (id: any) {
    const options = {
        method: 'GET',
        url: 'https://gamerpower.p.rapidapi.com/api/giveaway',
        params: {id: id},
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

export function formatearFecha (fecha: string): string {
    return new Date(fecha).toLocaleDateString('es-AR').toString();
}