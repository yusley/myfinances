import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3333/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMWEwOWVkZC0yZTlkLTQxOTUtOTdjZC01ZGE0ZDBmMjIyZWEiLCJpYXQiOjE3NDA2ODMxMjgsImV4cCI6MTc0MDY4NjcyOH0.GRyGj4P2xcYW1tC59fByM3hrVxeZH_JFD-u4mjZ0BT0'
    }
})

export {api};