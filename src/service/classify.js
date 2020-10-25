import axios from '../utils/axios'

export function getClassifyList() {
    return  axios.get("/classify");
}
