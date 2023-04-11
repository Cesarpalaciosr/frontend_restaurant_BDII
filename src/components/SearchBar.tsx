import React from "react"
// import "~/styles/globals.css";
// import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";


export default function SearchBar(){
    
    return (
        <>
        <section className="searchWrapper relative ">
            <input className="rounded-xl border-4 w-full h-8 pt-1 pr-1 mx-4" type="text" placeholder="Buscar Comida"/>
        </section>
        </>
    );
}