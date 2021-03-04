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
        selectedTags(state) {
            return state.tags.filter(tag => {
                return tag.selected;
            });
        },
        selectedTagsIds(state, getters) {
            return getters.selectedTags.map(selectedTag => {
                return selectedTag.id;
            });
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
        },
        toggleTagSelected(state, tagSelectable) {
            state.tags = state.tags.map(tag => {
               if(tagSelectable.id === tag.id) {
                   tag.selected = !tag.selected;
               }

               return tag;
            });
        }
    },
    actions: {
        async fetchTags({commit, getters}) {
            let response = await HTTP.get(getters.fetchContactTagUrl);

            commit('setTags', response.data.data);
            commit('setFetchContactTagUrl', response.next_page_url);
        },
        async createTag({commit}, creatableTag) {
            let response = await HTTP.post('api/v1/contact-tags', creatableTag);
            commit('addTag', response.data);
        }
    }
}