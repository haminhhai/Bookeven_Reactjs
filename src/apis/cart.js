import axiosService from '../utils/axiosService'
import { API_URL_LOCAL } from '../const/config'

// http://localhost:3000/cart
const url = 'cart'

export const getCart = () => {
    return axiosService.get(`${API_URL_LOCAL}/${url}`)
}

export const addToCart = data => {
    return axiosService.post(`${API_URL_LOCAL}/${url}`, data)
}

export const updateCart = data => {
    return axiosService.put(`${API_URL_LOCAL}/${url}/${data.id}`, data)
}

export const removeBook = id => {
    return axiosService.delete(`${API_URL_LOCAL}/${url}/${id}`)
}