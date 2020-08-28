import axios from '../utils/axios'

export function getIndexInfo() {
    return axios.get("/index-infos");
}