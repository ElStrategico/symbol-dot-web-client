import { HTTP } from '@/http-common';

export default {
    state: {
        creatableUser: null,
        errors: null
    },
    getters: {
        creatableUser: state => state.creatableUser,
        created: state => !!state.creatableUser,
        errors: state => state.errors,
        firstError(state) {
            if (!state.errors) return '';

            let message = state.errors[Object.keys(state.errors)[0]][0];
            return message ? message : '';
        }
    },
    mutations: {
        setCreatableUser(state, data) {
            state.creatableUser = data;
        },
        setErrors(state, errors = null) {
            state.errors = errors;
        }
    },
    actions: {
        async createUser({ commit, getters }) {
            try {
                let response = await HTTP.post('users', getters.creatableUser);
                commit('setErrors');
                commit('setCreatableUser', response.data);
                return response;
            } catch (error) {
                commit('setErrors', error.response.data.errors);
                return error.response;
            }
        }
    }
}