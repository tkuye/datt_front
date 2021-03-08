import axios from 'axios';


const baseURL = process.env.NODE_ENV === 'production'? "/api/v1":'http://localhost:8000/api/v1'

export default axios.create({
    baseURL,
    headers:{"Content-type":"application/json"}
})