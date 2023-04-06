import axios  from "axios";

const BASE_URL = /** "api url" */;
const TOKEN = /** admin url */;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:` ${TOKEN}`}
});