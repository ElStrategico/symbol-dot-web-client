import {HTTP} from "@/http-common";

export default {
    actions: {
        async createTag({commit}, creatableTag) {
            let response = await HTTP.post('api/v1/contact-tags', creatableTag);
            commit('addTag', response.data);
        }
    }
}