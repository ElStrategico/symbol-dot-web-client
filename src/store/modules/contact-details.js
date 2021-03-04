import {HTTP} from "@/http-common";

export default {
    state: {
        contactDetails: {}
    },
    getters: {
        contactDetails(state) {
            return state.contactDetails
        }
    },
    mutations: {
        setContactDetails(state, details) {
            state.contactDetails = details;
        }
    },
    actions: {
        async fetchContactById({commit}, id) {
            let response = await HTTP.get(`/api/v1/contacts/${id}`);
            commit('setContactDetails', response.data);
        }
    }
}