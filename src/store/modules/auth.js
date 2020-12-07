import Axios from "axios";

export default {
    state: {
        auth: false
    },
    getters: {
        isAuth(state) {
            return state.auth;
        }
    },
    actions: {
        async login({ context }) {
            let response = await Axios.post('http://symbol-dot.local/auth/api/login', data);
            console.log(response);
        }
    }
}