import axiosService from '../utils/axiosService'
import { API_URL } from '../const/config'

// http://localhost:3000/products
const url_books = 'books'

export const getListBooks = () => {
    return axiosService.get(`${API_URL}/${url_books}`)
}

// http://localhost:3000/fieldsBook
const url_field = 'fieldsBook'

export const getListFieldsbook = () => {
    return axiosService.get(`${API_URL}/${url_field}`)
}