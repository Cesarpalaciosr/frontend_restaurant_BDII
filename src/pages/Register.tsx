import { useEffect, useState } from "react";
import Head from 'next/head';

export default function Register() {
    return (
        <>
        <Head>
            <title>Registro</title>
        </Head>
        <div className="grid grid-cols-2 min-h-screen">

            <div className="bg-bgsr flex justify-center items-center flex-col px-{30} py-0">
                <section className="grid justify-items-center  mx-80">
                    <div className="grid gap-y-5">
                        <strong className="text-3xl font-sans">Create account</strong>
                        <p className="text-letragris text-sm font-medium">Bienvenidos SinNombre, ingresa tus datos para registrate en nuestra pagina</p>
                        <section className="grid grid-cols-6 col gap-y-4">
                            <label className=" font-bold font-nunito col-start-1 col-span-2">Nombre</label>
                            <input id="name_Client" className="col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder="nombre"></input>
                            <label className=" font-bold col-start-1 col-span-2">Apellido</label>
                            <input id="lastName_Client" className=" col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder="Apellido"></input>
                            <label className=" font-bold col-start-1 col-span-2">direccion</label>
                            <input id="addres_Client" className=" col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder="direccion"></input>
                            <label className=" font-bold col-start-1 col-span-2">telefono</label>
                            <input id="number_Client" className=" col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder="telefono"></input>
                            <label className=" font-bold col-start-1 col-span-2">E-mail</label>
                            <input id="email_client" className=" col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder="email"></input>
                            <label className=" font-bold col-start-1 col-span-2">Password</label>
                            <input id="password_Client" className="col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder="password"></input>
                            <label className=" font-bold col-start-1 col-span-2">Confirm Password</label>
                            <input id="confirm_Password_client"  className="col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder=" confirm password"></input>
                        </section>
                    </div>
                    <div className="grid gap-2">
                        <hr className="h-px w-[500px] my-8 bg-linea border-0 dark:bg-gray-700"></hr>
                        <div>
                            <label className="text-letragris"><input value="" className="w-4 h-4 accent-menosmorado bg-gray-100 border-gray-300 rounded focus:ring-morado dark:focus:ring-morado dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox"/> He leido y acepto los <a className="text-menosmorado">Terminos y condiciones</a></label>
                        
                            <div className="grid justify-items-end">
                                <button id="btn_Register" className="text-bgsr bg-menosmorado border-2 border-morado w-[150px] h-[32px] rounded-lg">Create my account</button>
                            </div>
                        </div>
                        <div className="grid justify-items-center">
                            <p className="text-letragris">Ya tienes cuenta? <a className="text-menosmorado">Ingresar</a></p>
                        </div>
                    </div>
                </section>
            </div>


            <div className="bg-gradient-to-tr from-morado to-menosmorado">
                <h3 className="text-">texto de ejemplo</h3>
            </div>
        </div>
        </>
    )   
}