import {HTTP} from "@/http-common";

export default {
    state: {
        avatar: null
    },
    getters: {
        avatar(state) {
            return state.avatar;
        }
    },
    mutations: {
        setAvatar(state, avatar) {
            state.avatar = avatar;
        }
    },
    actions: {
        async uploadAvatar({getters, rootState}) {
            let formData = new FormData();
            formData.append('avatar', getters.avatar);

            let response = await HTTP.post('api/v1/users/avatars', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            rootState.auth.authorizedUser.avatar = response.data;
        }
    }
}