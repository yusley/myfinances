import { AxiosError } from "axios";

export interface ResponseErrorInterface {
    message: string;
    status?: number;
    data?: {
        token?: string
    }
}

export class ErrorClass{
    errorReturn(error:Error){
        if(error instanceof AxiosError){
            let errorData = <ResponseErrorInterface>{
                message: error.response?.data.message,
                status: error.status
            }
            throw errorData
        }
    }
}

class ResponseError extends Error{
    status : number
    constructor(message: string, status: number){
        super(message)
        this.status = status
        Object.setPrototypeOf(this,Error.prototype)
    }
}