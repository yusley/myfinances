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

export async function VerifyToken(token:string) {

    const assign = process.env.ASSINGN_TOKEN

    // const decodeToken = jwt.decode(token)

    // console.log(decodeToken)
    

}
