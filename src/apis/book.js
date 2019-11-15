import axiosService from '../utils/axiosService'
import { API_URL } from '../const/config'

// http://localhost:3000/products
const url = 'books'

export const getListBooks = () => {
    return axiosService.get(`${API_URL}/${url}`)
}