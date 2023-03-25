import { useEffect, useState } from "react";

export default function Login() {
    return (
        <>
        <div className="grid grid-cols-2 min-h-screen">

            <div className="grid justify-items-center">
                
                <div className="grid gap-y-2">
                    <strong className="text-3xl font-sans">Log in</strong>
                    <p>Bienvenidos al restaurant sin nombre, ingresa tus datos para acceder a nuestra pagina</p>
                    <div className="grid grid-cols-2">
                        <a>E-mail</a>
                        <input placeholder="email"></input>
                        <a>Password</a>
                        <input placeholder="password"></input>
                    </div>
                </div>
                
                <span>Forgot password?</span>
                <div className="colo-gray-400"></div>
                <span>Remember me</span>
                <button>Log in</button>
                <p>No tienes cuenta</p> <a>Ingresar</a>
            </div>


            <div className="bg-gradient-to-tr from-morado to-menosmorado">
                <h3 className="text-">texto de ejemplo</h3>
            </div>
        </div>
        </>
    )   
}