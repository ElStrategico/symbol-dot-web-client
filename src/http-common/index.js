import Axios from "axios";

export const HTTP = Axios.create({
    baseURL: 'http://symbol-dot.local/',
    headers: {
        Authorization: `bearer ${localStorage.getItem('token')}`
    }
});