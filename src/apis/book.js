import axiosService from '../utils/axiosService'
import imgurService from '../utils/imgurService'
import { API_UPLOAD, API_URL } from '../const/config'

export const uploadImage = data => {
    return imgurService.post(`${API_UPLOAD}`, data)
}   
const url_book = 'book'

export const getDetailBook = data => {
    return axiosService.post(`${API_URL}/${url_book}/detail`, data)
}

export const addNewBook = data => {
    return axiosService.post(`${API_URL}/${url_book}/new`, data)
}

export const filterBook = data => {
    return axiosService.post(`${API_URL}/${url_book}/filter`, data)
}

export const updateListBooks = data => {
    return axiosService.put(`${API_URL}/${url_book}/update`, data)
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

const url_field = 'bookField'

export const getListFieldsbook = () => {
    return axiosService.get(`${API_URL}/${url_field}/list`)
}

const url_cmt = 'comment'

export const getListComments = data => {
    return axiosService.post(`${API_URL}/${url_cmt}/list`, data)
}

export const addComment = data => {
    return axiosService.post(`${API_URL}/${url_cmt}/new`, data)
}

export const updateComment = data => {
    return axiosService.put(`${API_URL}/${url_cmt}/update`, data)
}

export const deleteComment = data => {
    return axiosService.delete(`${API_URL}/${url_cmt}/delete`, data)
}

const url_rate = 'rate'

export const getListRate = data => {
    return axiosService.post(`${API_URL}/${url_rate}/list`, data)
}   

export const addRate = data => {
    return axiosService.post(`${API_URL}/${url_rate}/new`, data)
}

export const updateRate = data => {
    return axiosService.put(`${API_URL}/${url_rate}/update`, data)
}

