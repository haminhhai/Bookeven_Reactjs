import axios from 'axios'

class AxiosService {
    constructor() {
        const instance = axios.create()
        instance.interceptors.response.use(
            this.handleSuccess,
            this.handleError
        )
        this.instance = instance
    }

    handleSuccess(response) {
        return response
    }

    handleError(error) {
        return Promise.reject(error)
    }

    get(endpoint) {
        return this.instance.get(endpoint)
    }

    post(endpoint, payload) {
        return this.service.request({
            method: 'POST',
            url: endpoint,
            responseType: 'json',
            data: payload
        });
    }
    put(endpoint, payload) {
        return this.service.request({
            method: 'PUT',
            url: endpoint,
            responseType: 'json',
            data: payload
        });
    }

    delete(endpoint, payload) {
        return this.service.request({
            method: 'DELETE',
            url: endpoint,
            responseType: 'json',
            data: payload
        });
    }
}

export default new AxiosService()