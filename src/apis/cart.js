import axiosService from '../utils/axiosService'
import {  API_URL } from '../const/config'

// http://localhost:3000/cart
const url = 'cart'

export const getCart = () => {
    return axiosService.get(`${API_URL}/${url}/list`)
}

export const addToCart = data => {
    return axiosService.post(`${API_URL}/${url}/new`, data)
}

export const updateCart = data => {
    return axiosService.put(`${API_URL}/${url}/update`, data)
}

export const removeBook = data => {
    return axiosService.delete(`${API_URL}/${url}/delete`, data)
}