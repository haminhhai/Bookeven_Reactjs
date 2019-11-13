import axios from 'axios'

import * as config from '../const/config'

export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        method: method,
        url: `${config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err)
    })
}