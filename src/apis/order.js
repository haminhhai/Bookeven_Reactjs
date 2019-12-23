import axiosService from '../utils/axiosService'
import { API_URL } from '../const/config'

// http://localhost:3000/order
const url_order = 'order'

export const fetchAllListOrders = data => {
    return axiosService.post(`${API_URL}/${url_order}/list`, data)
} 

export const fetchDetailOrder = data => {
    return axiosService.post(`${API_URL}/${url_order}/detail`, data)
} 

export const filterOrder = data => {
    return axiosService.post(`${API_URL}/${url_order}/filter`, data)
} 

export const updateOrder = data => {
    return axiosService.put(`${API_URL}/${url_order}/update`, data)
}

export const createOrder = data => {
    return axiosService.post(`${API_URL}/${url_order}/new`, data)
}