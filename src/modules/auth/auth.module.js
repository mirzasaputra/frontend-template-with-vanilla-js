import { post } from './../../core/handle-request'

const base_url = 'login';

export default {
    actions: {
        async login(formData) {
            try {
                const res = await post(base_url, formData);
                return res
            } catch(err) {
                console.error(err)
            }
        }
    }
}