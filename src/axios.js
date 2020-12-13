import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-clone-d162b/us-central1/api' // The api (cloud function) url
})

export default instance