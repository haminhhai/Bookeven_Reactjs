import axiosService from '../utils/axiosService'
import {  API_URL } from '../const/config'

// http://localhost:3000/address
const url_address = 'address'

export const getListAddress = () => {
    return axiosService.get(`${API_URL}/${url_address}/list`)
}

export const createNewAddress = data => {
    return axiosService.post(`${API_URL}/${url_address}/new`, data)
}

export const updateAddress = data => {
    return axiosService.put(`${API_URL}/${url_address}/update`, data)
}

export const deleteAddress = data => {
    return axiosService.delete(`${API_URL}/${url_address}/delete`, data)
}

// http://api_url/user
const url_user = 'user'

export const getInfo = () => {
    return axiosService.get(`${API_URL}/${url_user}/info`)
}

export const updateInfo = data => {
    return axiosService.put(`${API_URL}/${url_user}/update`, data)
}

export const changePassword = data => {
    return axiosService.post(`${API_URL}/${url_user}/password`, data)
}