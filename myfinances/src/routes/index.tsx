import { Routes,Route } from "react-router";
import App from "../App";
import { Login } from "../pages/Login";

export function Routers(){

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
    )
}