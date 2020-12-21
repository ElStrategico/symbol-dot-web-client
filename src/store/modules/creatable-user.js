import { HTTP } from '@/http-common';

export default {
    state: {
        creatableUser: null,
        regErrors: null
    },
    getters: {
        creatableUser: state => state.creatableUser,
        created: state => !!state.creatableUser,
        errors: state => state.errors,
        firstRegError(state) {
            if (!state.regErrors) return '';

            let message = regErrors.errors[Object.keys(state.regErrors)[0]][0];
            return message ? message : '';
        }
    },
    mutations: {
        setCreatableUser(state, data) {
            state.creatableUser = data;
        },
        setRegErrors(state, errors = null) {
            state.regErrors = errors;
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