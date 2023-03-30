import { useEffect, useState } from "react";
import Head from 'next/head';

export default function Login() {
    return (
        <>
        <Head>
            <title>Registro</title>
        </Head>
        <div className="grid grid-cols-2 min-h-screen">

            <div className="bg-bgsr flex justify-center items-center flex-col px-{30} py-0">
                <section className="grid justify-items-center  mx-80">
                    <div className="grid gap-y-5">
                        <strong className="text-3xl font-sans">Log in</strong>
                        <p className="text-letragris text-sm font-medium">Bienvenidos a SinNombre, ingresa tus datos para entrar</p>
                        <section className="grid grid-cols-6 col gap-y-4">
                            <label className="font-bold font-nunito col-start-1 col-span-2">E-mail</label>
                            <input id="email_client" className="col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder="email"></input>
                            <label className="font-bold font-nunito col-start-1 col-span-2">Password</label>
                            <input id="password_Client" className="col-end-6 col-span-3 border-2 border-[#f7f7f9] border-slate-300 w-[285px] h-[32px] rounded-lg" placeholder="password"></input>
                            <span className=" text-menosmorado font-semibold col-end-7 col-span-2">Forgot password?</span>
                        </section>
                    </div>
                    <div className="grid gap-2">
                        <hr className="h-px w-[500px] my-8 bg-linea border-0 dark:bg-gray-700"></hr>
                            <div className="grid grid-cols-4">
                                <label className="text-letragris"><input value="" className="w-4 h-4 accent-menosmorado bg-gray-100 border-gray-300 rounded focus:ring-morado dark:focus:ring-morado dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox"/> Recuerdame</label>
                                <button id="btn_Login" className="col-end-5 text-bgsr bg-menosmorado border-2 border-morado w-[70px] h-[32px] rounded-lg">Log in</button>
                            </div>
                        <div className="grid justify-items-center">
                            <label className="self-center">No tienes cuenta?  <a className="text-menosmorado"> Ingresar</a></label>
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