import axiosService from '../utils/axiosService'
import { API_URL } from '../const/config'

// http://localhost:3000/order
const url_order = 'order'

export const fetchAllListOrders = () => {
    return axiosService.get(`${API_URL}/${url_order}`)
} 

export const fetchListOrdersById = id => {
    return axiosService.get(`${API_URL}/${url_order}?customerId=${id}`)
} 

export const filterOrder = (code, name, phone, createAt, endTime, status) => {
    return axiosService.get(`${API_URL}/${url_order}?code=${code}&name=${name}&phone=${phone}&createAt=${createAt}&endTime=${endTime}&status=${status}`)
} 

export const updateOrder = data => {
    return axiosService.put(`${API_URL}/${url_order}/${data.id}`, data)
}

export const createOrder = data => {
    return axiosService.post(`${API_URL}/${url_order}`, data)
}