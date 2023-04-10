import React from "react";
// import "~/styles/globals.css";
// import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
//  https://codepen.io/nabinbhatt/pen/qBMmxRJ

export default function Header() {
  return (
    <header>
       <header className="header-container flex h-{60px} items-center justify-between my-0 mr-4">
        <div className="logo font-bold italic">
            LOGO
        </div>
        <div className="menu-active flex items-center justify-between hidden ">
            <nav className="navbar flex items-center justify-center">
                <div className="nav-item"><a href="#">Home</a></div>
                <div className="nav-item"><a href="#">About</a></div>
                <div className="nav-item"><a href="#">Contact</a></div>
                <div className="nav-item"><a href="#">Blog</a></div>
            </nav>
            <div className="user-options">
                <div className="option"><i className="fa fa-moon"></i></div>
                <div className="option"><i className="fa fa-user"></i></div>
                <div className="option"><i className="fa fa-gear"></i></div>
            </div>
        </div>
        <nav className="navbar">
            <div className="nav-item"><a href="#">Home</a></div>
            <div className="nav-item"><a href="#">About</a></div>
            <div className="nav-item"><a href="#">Contact</a></div>
            <div className="nav-item"><a href="#">Blog</a></div>
        </nav>
        <div className="user-options">
            <div className="option"><i className="fa fa-moon"></i></div>
            <div className="option"><i className="fa fa-user"></i></div>
            <div className="option"><i className="fa fa-gear"></i></div>
        </div>
        <div className="menu">
            <i className="fa fa-bars"></i>
        </div>
    </header>
    </header>
  );
}
