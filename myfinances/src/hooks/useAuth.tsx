import { createContext,ReactNode,useContext, useState } from "react";
import { getToken } from "../services/login";
import { AxiosResponse } from "axios";
import { ResponseErrorInterface } from "../utils/errorClass";

  
export interface AuthContextData {
    logged: boolean
    id: string
    token: string
    login: (user: string, password: string) => Promise<ResponseErrorInterface | void>
}


export const defaultAuthContextData: AuthContextData = {
    logged: false,
    id: '',
    token: '',
    login: async () => {}
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export function AuthProvider({children}: AuthProviderProps){

    const [auth,setAuth] = useState<AuthContextData>({
        logged: false,
        id: '',
        token: '',
        login: async () => {}
    });

    const  login = async (username: string, password: string): Promise<ResponseErrorInterface | void> => {
        try{
            const token = await getToken(username,password) as AxiosResponse
            
            console.log(token)

            if(token.status === 200){
                console.log(token.data?.token)
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