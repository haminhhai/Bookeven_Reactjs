import axiosService from '../utils/axiosService'
import { API_URL_LOCAL } from '../const/config'

// http://localhost:3000/products
const url_books = 'books'

export const getListBooks = () => {
    return axiosService.get(`${API_URL_LOCAL}/${url_books}`)
}

export const updateListBooks = data => {
    return axiosService.put(`${API_URL_LOCAL}/${url_books}/${data.id}`, data)
}


// http://localhost:3000/fieldsBook
const url_field = 'fieldsBook'

export const getListFieldsbook = () => {
    return axiosService.get(`${API_URL_LOCAL}/${url_field}`)
}

// http://localhost:3000/comment
const url_cmt = 'comment'

export const getListComments = ISBN => {
    return axiosService.get(`${API_URL_LOCAL}/${url_cmt}?ISBN=${ISBN}`)
}

export const addComment = data => {
    return axiosService.post(`${API_URL_LOCAL}/${url_cmt}`, data)
}