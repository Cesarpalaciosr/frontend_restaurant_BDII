import { useEffect, useState } from "react";

export default function Register() {
    return (
        <>
        <div className="grid grid-cols-2 min-h-screen">

            <div className="grid justify-items-center">
                
                <div className="grid gap-y-2">
                    <strong className="text-3xl font-sans">Register</strong>
                    <p>Bienvenidos al restaurant sin nombre, ingresa tus datos para registrate en nuestra pagina</p>
                    <div className="grid grid-cols-2">
                        <a>Nombre</a>
                        <input placeholder="nombre"></input>
                        <a>Apellido</a>
                        <input placeholder="Apellido"></input>
                        <a>direccion</a>
                        <input placeholder="direccion"></input>
                        <a>telefono</a>
                        <input placeholder="telefono"></input>
                        <a>E-mail</a>
                        <input placeholder="email"></input>
                        <a>Password</a>
                        <input placeholder="password"></input>
                        <a>Confirm Password</a>
                        <input placeholder=" confirm password"></input>
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