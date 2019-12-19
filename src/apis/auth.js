import axiosService from '../utils/axiosService'
import { API_URL } from '../const/config'

export const signup = data => {
    return axiosService.post(`${API_URL}/signup`, data)
}

export const login = data => {
    return axiosService.post(`${API_URL}/login`, data)
}

export const signup_manager = data => {
    return axiosService.post(`${API_URL}/signup/manager`, data)
}

export const logout = () => {
    return axiosService.get(`${API_URL}/logout`)
}


