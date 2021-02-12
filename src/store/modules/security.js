import {HTTP} from '@/http-common/index';

export default {
    actions: {
        async verifyEmail({}, verifyCode) {
            await HTTP.post('api/v1/security/verify-email', {
               verify_code: verifyCode
            });
        }
    }
}