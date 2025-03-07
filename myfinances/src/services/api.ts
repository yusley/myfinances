import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3333/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMWEwOWVkZC0yZTlkLTQxOTUtOTdjZC01ZGE0ZDBmMjIyZWEiLCJpYXQiOjE3NDEyNjgzMDEsImV4cCI6MTc0MTI3MTkwMX0.VNNfS6SCWkdiu1v9UNd5NHI3cFo4_BPz_V6-MFjc0CE'
    }
})

export {api};