import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../assets/images/logo.png";
import userIcon from "../assets/images/user_icon.svg";
//  https://codepen.io/nabinbhatt/pen/qBMmxRJ

export default function Header() {
  return (
    <>
       <header className="header-container flex h-16 items-center my-0 place-content-between sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-linea ">
            <div className = "flex justify-center mx-4 space-x-4">
                <Image 
                src={logo}
                className="object-cover"
                alt ="Picture Logo"
                width={50}
                height={50}
                />
                <h1 className="logo font-semibold text-4xl italic my-3">
                    Restaurant BDII
                </h1>
            </div>
            <nav className="menu-active flex  justify-between text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200 ">
                <ul className="navbar flex mx-4  space-x-8">
                    <li ><a className="nav-item hover:text-azulito " href="#">Home</a></li>
                    <li ><a className="nav-item hover:text-azulito " href="#">Menu</a></li>
                    <li ><a className="nav-item hover:text-azulito " href="#">About us</a></li>
                    <li className="nav-item"><Image 
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={userIcon}
                className="object-cover"
                alt ="user icon"
                width={20}
                height={20}
                /></li>
                </ul>
            </nav>
        </header>
    </>
  );
}
