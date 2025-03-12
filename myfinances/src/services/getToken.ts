import { api } from "./api"
import { ErrorClass } from "../utils/errorClass"


export async function getToken(username: string, password: string){

    try{
        const token = await api.post('/login', {username,password})
        return token
    }catch(error){
        console.log('rerrer')
        return new ErrorClass().errorReturn(error as Error)
    }
}
