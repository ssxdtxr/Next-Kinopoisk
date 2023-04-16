import axios from "axios";

export const http = axios.create({
    baseURL: 'https://kinopoiskapiunofficial.tech/api',
    headers: {
        'X-API-KEY': 'e9f378d2-8f59-46cb-8d73-8be889859bca'
    }
});