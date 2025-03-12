import { jwtDecode } from "jwt-decode"
import { api } from "./api"
import { data } from "react-router"
import { ErrorClass } from "../utils/errorClass"


export async function VerifyToken(token:string) {
    console.log('verificando...')
    try{
        const validToken = await api.post('/verifytoken',{"token": token})
        
        if(validToken.status === 200){
            console.log(validToken)
            return validToken
        }
    }catch(error){
        return new ErrorClass().errorReturn(error as Error)
    }



}
