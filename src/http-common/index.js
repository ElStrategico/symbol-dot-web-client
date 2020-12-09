import Axios from "axios";

export const HTTP = Axios.create({
    baseURL: 'http://symbol-dot.local/api/v1/',
    headers: {
        Authorization: 'Foo'
    }
});