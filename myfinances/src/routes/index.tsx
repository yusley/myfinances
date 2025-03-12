import { Routes, Route, Navigate } from "react-router";
import App from "../App";
import { Login } from "../pages/Login";
import { useAuth } from "../hooks/useAuth";
import { NotFund } from "../pages/Notfound";

export function Routers() {
    const { auth } = useAuth(); // Agora temos isLoading

    return (
        <Routes>
            {auth ? ( // Verifica se o usuário está autenticado
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
