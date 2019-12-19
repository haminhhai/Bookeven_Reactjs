import axiosService from '../utils/axiosService'
import { API_URL_LOCAL, API_URL } from '../const/config'

// http://localhost:3000/books
const url_books = 'books'
const url_book = 'book'

export const getListBooks = () => {
    return axiosService.get(`${API_URL_LOCAL}/${url_books}`)
}

export const getDetailBook = data => {
    return axiosService.post(`${API_URL}/${url_book}/detail`, data)
}

export const updateListBooks = data => {
    return axiosService.put(`${API_URL_LOCAL}/${url_books}/${data.id}`, data)
}

export const getBooksByBFID = data => {
    return axiosService.post(`${API_URL}/${url_book}/list`, data)
}

export const getListBestSeller = data => {
    return axiosService.post(`${API_URL}/${url_book}/bestSeller`, data)
}

export const getListBestSales = data => {
    return axiosService.post(`${API_URL}/${url_book}/bestSales`, data)
}

export const getListNewest = data => {
    return axiosService.post(`${API_URL}/${url_book}/newest`, data)
}

export const getListBestRate = data => {
    return axiosService.post(`${API_URL}/${url_book}/bestRate`, data)
}


// http://localhost:3000/fieldsBook
const url_field = 'bookField'

export const getListFieldsbook = () => {
    return axiosService.get(`${API_URL}/${url_field}/list`)
}

// http://localhost:3000/comment
const url_cmt = 'comment'

export const getListComments = data => {
    return axiosService.get(`${API_URL}/${url_cmt}/list`, data)
}

export const addComment = data => {
    return axiosService.post(`${API_URL}/${url_cmt}/new`, data)
}