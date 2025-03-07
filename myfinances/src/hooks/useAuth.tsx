import { createContext,ReactNode,useContext, useState } from "react";

export interface AuthContextData {
    id: string
    token: string
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export function AuthProvider(children:ReactNode){

    const [auth,setAuth] = useState(false);
    

    return(
        <>
            {children}
        </>
    )

};


export const useAuth = () =>{
    const contex = useContext(AuthContext)
    return contex
};