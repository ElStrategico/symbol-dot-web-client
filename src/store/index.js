import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import contact from '@/store/modules/contact'
import security from '@/store/modules/security'
import userAvatar from '@/store/modules/user-avatar'
import contactTag from '@/store/modules/contact-tag'
import creatableUser from '@/store/modules/creatable-user'
import contactDetails from "@/store/modules/contact-details"
import creatableContact from '@/store/modules/creatable-contact'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        contact,
        security,
        userAvatar,
        contactTag,
        creatableUser,
        contactDetails,
        creatableContact
    }
})