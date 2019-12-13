import axiosService from '../utils/axiosService'
import { API_URL } from '../const/config'

export const signup = data => {
    return axiosService.post(`${API_URL}/signup`, data)
}

export const login = data => {
    return axiosService.post(`${API_URL}/login`, data)
}

export const logout = data => {
    return axiosService.post(`${API_URL}/logout`, data)
}


