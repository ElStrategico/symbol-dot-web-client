import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import auth from '@/store/modules/auth.js'
import creatableUser from '@/store/modules/creatable-user.js'

Vue.use(Vuex)

export const HTTP = Axios.create({
    baseURL: 'http://symbol-dot.local/api/v1/',
    headers: {
        Authorization: 'Foo'
    }
});

export default new Vuex.Store({
    modules: {
        auth,
        creatableUser
    }
})