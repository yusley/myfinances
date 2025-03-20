import { Routes, Route, Navigate } from "react-router";
import App from "../App";
import { Login } from "../pages/Login";
import { useAuth } from "../hooks/useAuth";
import { useCookies } from "react-cookie";

export function Routers() {
   
    const [cookie] = useCookies(['token'])

    return (
        <Routes>
            {cookie.token ? ( // Verifica se o usuário está autenticado
                <>
                    <Route path="/" element={<App />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </>
            ) : (
                <>
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </>
            )}
        </Routes>
    );
}
