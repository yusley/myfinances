import { FormEvent, useState } from "react"
import { LoginFunction } from "../../services/login";
import { Navigate } from "react-router";

export function Login () {

    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleLogin  = (e:FormEvent) => {
        e.preventDefault()
        setError("")

        if(user.length < 11 || password.length < 3){
            setError("Usuário ou senha inválidos")
            console.log('erro')
            
        }

        LoginFunction();

    }

    return(
        <div className="h-screen flex justify-center items-center">
            <div className="w-full h-full sm:h-full lg:h-[90%] max-h-[800px] flex bg-white max-w-[100rem]">
                <div className="w-[50%] lg:flex md:flex hidden justify-center items-center">
                    <img src="../../public/loginLogo.jpg" alt="" />
                </div>
                <div className="lg:w-[50%] md:w-[50%] w-[100%] p-2 bg-[#6933FF] flex gap-10 justify-center items-center flex-col">
                    <h1 className="text-4xl text-[#ffff]">Login</h1>
                    <form className="w-full max-w-[30rem] flex gap-5 justify-center items-center flex-col" action="">
                        <input 
                            className='w-full p-[1rem] font-medium text-blue-950 border-[1px] bg-[#F0F2F5] border-[#D7D7D7] rounded-[0.3rem] my-[0.5rem] focus:outline-none focus:ring-0' 
                            placeholder="Usuário"
                            type="text"
                            onChange={(e) => setUser(e.target.value)}
                        />

                        <input 
                            className='w-full p-[1rem] font-medium text-blue-950 border-[1px] bg-[#F0F2F5] border-[#D7D7D7] rounded-[0.3rem] my-[0.5rem] focus:outline-none focus:ring-0' 
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <p className="text-red-900 font-medium">{error}</p>

                        <input 
                            className='w-full bg-[#6933FF] p-[1rem] border-[1px] border-[#D7D7D7] rounded-[0.3rem] my-[1rem] text-[#FFFFFF] cursor-pointer' 
                            type="submit" 
                            value='Cadastrar' 
                            onClick={handleLogin}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}