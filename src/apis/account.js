import axiosService from '../utils/axiosService'
import { API_URL } from '../const/config'

// http://localhost:3000/address
const url_address = 'address'

export const getListAddress = () => {
    return axiosService.get(`${API_URL}/${url_address}`)
}

export const createNewAddress = data => {
    return axiosService.post(`${API_URL}/${url_address}`, data)
}

export const updateAddress = data => {
    return axiosService.put(`${API_URL}/${url_address}/${data.id}`, data)
}

export const deleteAddress = id => {
    return axiosService.delete(`${API_URL}/${url_address}/${id}`)
}