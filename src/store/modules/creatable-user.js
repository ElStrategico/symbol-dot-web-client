import { HTTP } from '@/http-common';

export default {
    state: {
        creatable_user: {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    getters: {
        creatableUserName(state) {
            return state.creatable_user.name;
        },
        creatableUserEmail(state) {
            return state.creatable_user.email;
        },
        creatableUserPassword(state) {
            return state.creatable_user.password
        },
        creatableUserPasswordConfirmation(state) {
            return state.creatable_user.password_confirmation;
        },
        creatableUser(state) {
            return state.creatable_user;
        }
    },
    mutations: {
        setCreatableName(state, name) {
            state.creatable_user.name = name;
        },
        setCreatableEmail(state, email) {
            state.creatable_user.email = email;
        },
        setCreatablePassword(state, password) {
            state.creatable_user.password = password;
        },
        setCreatablePasswordConfirmation(state, password_confirmation) {
            state.creatable_user.password_confirmation = password_confirmation;
        }
    },
    actions: {
        async registration({getters}) {
            await HTTP.post('api/v1/users', getters.creatableUser);
        }
    }
}