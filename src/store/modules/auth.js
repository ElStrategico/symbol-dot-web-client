import { HTTP } from '@/http-common';

export default {
    state: {
        token: localStorage.getItem('token'),
        expired: +localStorage.getItem('expired')
    },
    getters: {
        isAuth(state) {
            return state.token != undefined;
        },
        tokenExpired(state) {
            let currentTime = Math.floor(Date.now() / 1000);
            return currentTime > state.expired;
        }
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token);
            state.token = token;
        },
        setExpired(state, expired) {
            localStorage.setItem('expired', expired);
            state.expired = expired;
        }
    },
    actions: {
        async login({ commit }) {
            try {
                let response = await HTTP.post('login', {});
            } catch (error) {
                console.log(error.response.data.errors);
            }
        }
    }
}