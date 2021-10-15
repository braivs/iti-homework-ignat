import axios from "axios";


const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const API = {
    request(value: boolean) {
        return instance.post<ResponseType>(``,{success: value})
    }
}

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}
}