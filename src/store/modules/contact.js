import {HTTP} from "@/http-common";

export default {
    state: {
        contacts: [],
        fetchUrl: 'api/v1/contacts',
        contactSearchQuery: ''
    },
    getters: {
        contacts(state) {
            return state.contacts;
        },
        fetchUrl(state) {
            return state.fetchUrl;
        },
        contactSearchQuery(state) {
            return state.contactSearchQuery;
        }
    },
    mutations: {
        setContacts(state, contacts) {
            state.contacts = contacts;
        },
        addContacts(state, contacts) {
            state.contacts = state.contacts.concat(contacts);
        },
        clearContacts(state) {
            state.contacts = [];
        },
        setContactSearchQuery(state, query) {
            state.contactSearchQuery = query;
        }
    },
    actions: {
        async fetchContacts({commit, getters}) {
            let response = await HTTP.get(getters.fetchUrl);
            commit('addContacts', response.data.data);
        },
        async searchContacts({commit, getters}) {
            let response = await HTTP.get('api/v1/searcher/contacts', {
                params: {
                    query: getters.contactSearchQuery
                }
            });
            commit('setContacts', response.data);
        },
        clearContacts({commit}) {
            commit('clearContacts');
        }
    }
}