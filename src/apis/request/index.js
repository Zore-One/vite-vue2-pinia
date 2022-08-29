import axios from 'axios'
const env = import.meta.env
console.log('env',env);
const server = axios.create({
    baseURL:env.VITE_API_BASE_URL,
    timeout:5000,
    headers:{
        'Content-Type':'application/json',
    }
})
 
server.interceptors.request.use(config => {
    return config
},error => {
    console.log(error);
    return Promise.reject(error)
})

server.interceptors.response.use(response => {
    return response.data
},error => {
    console.log(error);
    return error
})
