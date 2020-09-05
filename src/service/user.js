import axios from '../utils/axios'

export function getInfo() {
    return axios.get("/user");
}

export function login(params) {
    return axios.post("/user/login", params);
}

export function logout() {
    return axios.delete("/user");
}