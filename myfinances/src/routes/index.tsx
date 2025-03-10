import { Routes,Route, Navigate } from "react-router";
import App from "../App";
import { Login } from "../pages/Login";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { defaultAuthContextData } from "../hooks/useAuth";
import { NotFund } from "../pages/Notfound";

export function Routers(){

    const {logged} = defaultAuthContextData;

    return(
        <Routes>
            {
                logged === true ?
                <>
                    <Route path="/" element={<App/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<NotFund/>}/>
                </> : 
                <>
                    <Route path="login" element={<Login/>}/>
                    <Route path="*" element={<Navigate to="/login"/>} />
                </>
                
            }
        </Routes>
    )
}