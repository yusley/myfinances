import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3333/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwMWEwOWVkZC0yZTlkLTQxOTUtOTdjZC01ZGE0ZDBmMjIyZWEiLCJpYXQiOjE3NDA3Nzc4MjUsImV4cCI6MTc0MDc4MTQyNX0.-gXDBaZxmryKLQDvutDTZCr1j4sFWwtgqEKtNUTTe6c'
    }
})

export {api};