import { createContext,ReactNode,useContext, useState } from "react";
import { LoginFunction } from "../services/login";

export interface AuthContextData {
    logged: boolean
    id: string
    token: string
    login: (user: string, password: string) => Promise<void>
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

    const  login = async (user: string, password: string) => {
        
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