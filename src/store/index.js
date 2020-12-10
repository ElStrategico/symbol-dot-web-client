import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import auth from '@/store/modules/auth.js'
import creatableUser from '@/store/modules/creatable-user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        creatableUser
    }
})