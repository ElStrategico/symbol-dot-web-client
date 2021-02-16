import {HTTP} from "@/http-common";

export default {
    state: {
        contacts: [],
        fetchUrl: 'api/v1/contacts',
        contactFetching: false,
        contactSearchQuery: '',
        contactCurrentPage: null,
        contactLastPage: null
    },
    getters: {
        contacts(state) {
            return state.contacts;
        },
        fetchUrl(state) {
            return state.fetchUrl;
        },
        contactFetching(state) {
            return state.contactFetching;
        },
        contactSearchQuery(state) {
            return state.contactSearchQuery;
        },
        contactCurrentPage(state) {
            return state.contactCurrentPage;
        },
        contactLastPage(state) {
            return state.contactLastPage;
        }
    },
    mutations: {
        setContacts(state, contacts) {
            state.contacts = contacts;
        },
        clearContacts(state) {
            state.contacts = [];
        },
        toggleContactFetching(state) {
            state.contactFetching = !state.contactFetching;
        },
        setContactSearchQuery(state, query) {
            state.contactSearchQuery = query;
        },
        setContactCurrentPage(state, page) {
            state.contactCurrentPage = page;
        },
        setContactLastPage(state, page) {
            state.contactLastPage = page;
        }
    },
    actions: {
        async fetchContacts({commit, getters}, page = 1) {
            commit('toggleContactFetching');
            let response = await HTTP.get(getters.fetchUrl, {
                params: {
                    page
                }
            });
            commit('toggleContactFetching');
            commit('setContacts', response.data.data);
            commit('setContactCurrentPage', response.data.current_page);
            commit('setContactLastPage', response.data.last_page);
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