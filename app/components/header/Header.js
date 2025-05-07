"use client";

import { useState } from "react";
import Image from "next/image";
import "./Header.css";

import logoimage from "../../assets/1.svg";
import magnify from "../../assets/magnifyi.svg";
import heart from "../../assets/heart.svg";
import bag from "../../assets/bag.svg";
import profile from "../../assets/profile.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <Image src={logoimage} alt="Logo" width={40} height={40} />
          <div className="logo">LOGO</div>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className="icons">
          <Image src={magnify} alt="Search" width={20} height={20} />
          <Image src={heart} alt="Wishlist" width={20} height={20} />
          <Image src={bag} alt="Bag" width={20} height={20} />
          <Image src={profile} alt="Profile" width={20} height={20} />
          <select>
            <option>ENG</option>
            <option>HIN</option>
          </select>
        </div>
      </header>

      <nav className="navbar">
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
