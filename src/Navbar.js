// src/Navbar.js
import React from 'react';
import './App.css';
import { FaCartShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from './img/navbar.png';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>
      <img src={logo} alt="PSY-X Logo" className="logo" />  {}
      </h1>
      <ul>
        <li><button className="button" onClick={() => window.location.href = "#home"}><FaHome /></button></li>
        <li><button className="button" onClick={() => window.location.href = "#Loja"}><RiShoppingBag4Fill /></button></li>
        <li><button className="button" onClick={() => window.location.href = "#sobre"}><PiInstagramLogoFill /></button></li>
        <li><button className="button" onClick={() => window.location.href = "#carrinho"}><FaCartShopping /></button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
