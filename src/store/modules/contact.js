import {HTTP} from "@/http-common";

export default {
    state: {
        contacts: []
    },
    getters: {
        contacts(state) {
            return state.contacts;
        }
    },
    mutations: {
        addContacts(state, contacts) {
            state.contacts = state.contacts.concat(contacts);
        },
        clearContacts(state) {
            state.contacts = [];
        }
    },
    actions: {
        async fetchContacts({commit}) {
            let response = await HTTP.get('api/v1/contacts');
            commit('addContacts', response.data.data);
        },
        clearContacts({commit}) {
            commit('clearContacts');
        }
    }
}