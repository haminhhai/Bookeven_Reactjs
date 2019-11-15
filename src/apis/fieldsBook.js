import axiosService from '../utils/axiosService'
import { API_URL } from '../const/config'

// http://localhost:3000/fieldsBook
const url = 'fieldsBook'

export const getListFieldsbook = () => {
    return axiosService.get(`${API_URL}/${url}`)
}