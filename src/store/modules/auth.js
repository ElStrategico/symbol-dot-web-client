import { HTTP } from '@/http-common';

export default {
    state: {
        login: null,
        password: null,
        token: localStorage.getItem('token'),
        expired: +localStorage.getItem('expired'),
        authErrors: null
    },
    getters: {
        isAuth(state) {
            return state.token != undefined;
        },
        tokenExpired(state) {
            let currentTime = Math.floor(Date.now() / 1000);
            return currentTime > state.expired;
        },
        credential(state) {
            return {
                email: state.login,
                password: state.password
            }
        },
        firstAuthError(state) {
            if (!state.authErrors) return '';

            let message = state.authErrors[Object.keys(state.authErrors)[0]][0];
            return message ? message : '';
        }
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token);
            state.token = token;
        },
        setExpired(state, expired) {
            let currentTime = Math.floor(Date.now() / 1000);
            expired = currentTime + +expired;

            localStorage.setItem('expired', expired);
            state.expired = expired;
        },
        credential(state, data) {
            state.login = data.login;
            state.password = data.password;
        },
        setAuthErrors(state, errors = null) {
            state.authErrors = errors;
        }
    },
    actions: {
        async login({ commit, getters }) {
            try {
                let response = await HTTP.post('auth/login', getters.credential);

                commit('setToken', response.data.access_token);
                commit('setExpired', response.data.expires_in);

                return response;
            } catch (error) {
                commit('setAuthErrors', error.response.data.errors);
                return error.response;
            }
        }
    }
}