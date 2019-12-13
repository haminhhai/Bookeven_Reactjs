import axiosService from '../utils/axiosService'
import { API_URL_LOCAL, API_URL } from '../const/config'

// http://localhost:3000/address
const url_address = 'address'

export const getListAddress = () => {
    return axiosService.get(`${API_URL_LOCAL}/${url_address}`)
}

export const createNewAddress = data => {
    return axiosService.post(`${API_URL_LOCAL}/${url_address}`, data)
}

export const updateAddress = data => {
    return axiosService.put(`${API_URL_LOCAL}/${url_address}/${data.id}`, data)
}

export const deleteAddress = id => {
    return axiosService.delete(`${API_URL_LOCAL}/${url_address}/${id}`)
}

// http://api_url/user
const url_user = 'user'

export const getInfo = id => {
    return axiosService.get(`${API_URL}/${url_user}/${id}`)
}

export const updateInfo = data => {
    return axiosService.put(`${API_URL}/${url_user}/${data.id}`, data)
}