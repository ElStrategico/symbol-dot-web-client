import Time from '@/helpers/time';
import { HTTP } from '@/http-common';

export default {
    state: {
        email: '',
        password: '',
        token: localStorage.getItem('token'),
        expires_in: localStorage.getItem('expires_in'),
        authorizedUser: null
    },
    getters: {
        email(state) {
            return state.email;
        },
        password(state) {
            return state.password;
        },
        credential(state) {
            return {
                email: state.email,
                password: state.password
            }
        },
        isAuth(state) {
            return !!state.token;
        },
        authorizedUser(state) {
            return state.authorizedUser;
        }
    },
    mutations: {
        setEmail(state, email) {
            state.email = email;
        },
        setPassword(state, password) {
            state.password = password;
        },
        setAuth(state, auth) {
            state.token = auth.access_token;
            state.expires_in = Time.get() + auth.expires_in;
            localStorage.setItem('token', state.token);
            localStorage.setItem('expires_in', state.expires_in);
        },
        setAuthorizedUser(state, user) {
            state.authorizedUser = user;
        }
    },
    actions: {
        async login({ commit, getters }) {
            let response = await HTTP.post('api/v1/auth/login', getters.credential);
            commit('setAuth', response.data);
        },
        async me({commit, getters}) {
            let response = await HTTP.get('api/v1/auth/me');
            commit('setAuthorizedUser', response.data);
        }
    }
}