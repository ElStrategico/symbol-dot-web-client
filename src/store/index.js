import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import auth from '@/store/modules/auth'
import security from '@/store/modules/security'
import creatableUser from '@/store/modules/creatable-user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        creatableUser,
        security
    }
})