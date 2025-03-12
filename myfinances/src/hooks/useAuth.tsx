import { createContext,ReactNode,useContext, useState } from "react";
import { getToken } from "../services/getToken";
import { AxiosResponse } from "axios";
import { ResponseErrorInterface } from "../utils/errorClass";
import { VerifyToken } from "../services/verifyToken";

  
export interface UserTokenDataInterface {
    auth: boolean
    id: string
    token: string
    permission?: string
    login?: (user: string, password: string) => Promise<ResponseErrorInterface | AxiosResponse | void>
}


export const defaultAuthContextData: UserTokenDataInterface = {
    auth: false,
    id: '',
    token: '',
    permission: '',
    login: async () => {}
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<UserTokenDataInterface>(
    {} as UserTokenDataInterface
);



export function AuthProvider({children}: AuthProviderProps){

    const [auth,setAuth] = useState<UserTokenDataInterface>(defaultAuthContextData);

    const  login = async (username: string, password: string): Promise<ResponseErrorInterface | AxiosResponse | void> => {
        try{
            const responseToken = await getToken(username,password) as AxiosResponse
            

            if(responseToken.status === 200){
                
                const tokenData = await VerifyToken(responseToken.data?.token) as AxiosResponse

                const newAuthState = {
                    "auth": true,
                    "id": tokenData.data.userId,
                    "permission": tokenData.data.permission,
                    "token": responseToken.data?.token
                }

                setAuth(newAuthState)

                return {
                    message: 'sucess',
                    status: responseToken.status,
                    data: newAuthState
                }
             
            }

        }catch(error){
            return error as ResponseErrorInterface
        }

    }
    
    return(
        <AuthContext.Provider value={{...auth,login}}>
            {children}
        </AuthContext.Provider>
            
    )

};


export const useAuth = () =>{
    const contex = useContext(AuthContext)
    return contex
};