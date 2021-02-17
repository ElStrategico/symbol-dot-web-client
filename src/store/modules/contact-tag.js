import {HTTP} from "@/http-common";

export default {
    state: {
        tags: [],
        fetchContactTagUrl: 'api/v1/contact-tags'
    },
    getters: {
        tags(state) {
            return state.tags;
        },
        fetchContactTagUrl(state) {
            return state.fetchContactTagUrl;
        }
    },
    mutations: {
        setTags(state, tags) {
            state.tags = tags;
        },
        addTag(state, tag) {
            state.tags.push(tag);
        },
        setFetchContactTagUrl(state, url) {
            state.fetchContactTagUrl = url;
        }
    },
    actions: {
        async fetchTags({commit, getters}) {
            let response = await HTTP.get(getters.fetchContactTagUrl);

            commit('setTags', response.data.data);
            commit('setFetchContactTagUrl', response.next_page_url);
        }
    }
}