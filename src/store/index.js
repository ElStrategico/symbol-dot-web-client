import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import auth from '@/store/modules/auth'
import contact from '@/store/modules/contact'
import security from '@/store/modules/security'
import userAvatar from '@/store/modules/user-avatar'
import creatableUser from '@/store/modules/creatable-user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        contact,
        security,
        userAvatar,
        creatableUser,
    }
})