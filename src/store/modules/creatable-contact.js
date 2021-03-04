import {HTTP} from '@/http-common';

export default {
    state: {
        creatableContact: {
            last_name: '',
            first_name: '',
            patronymic: '',
            email: '',
            phone: '',
            description: ''
        }
    },
    getters: {
        creatableContact(state) {
            return state.creatableContact;
        }
    },
    mutations: {
        setCreatableContact(state, creatableContact) {
            state.creatableContact = creatableContact;
        },
        clearCreatableContact(state) {
            for(let key in state.creatableContact) {
                state.creatableContact[key] = '';
            }
        }
    },
    actions: {
        async createContact({commit, getters, rootGetters}) {
            let formData = new FormData();
            for(let key in getters.creatableContact) {
                if(getters.creatableContact[key]) {
                    formData.append(key, getters.creatableContact[key]);
                }
            }
            rootGetters.selectedTagsIds.forEach(id => {
                formData.append('tag_ids[]', id);
            })

            await HTTP.post('api/v1/contacts', formData);
            commit('clearCreatableContact');
        }
    }
}