import React, {useState} from "react";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import {FaBars} from "react-icons/fa"
import styles from "../styles/components.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="  h-[80px] px-[7%] flex justify-between items-center">
      <div>
        <h1 className=" font-bold text-[25px]">Nostra</h1>
      </div>
      <nav className={isOpen ? "navContent mobile-menu-link" : "navContent"}>
        <Link href="#">Shop</Link>
        <Link href="#mostWantedProduct">Most Wanted</Link>
        <Link href="#featured">New Arrivles</Link>
        <Link href="#brands">Brands</Link>
      </nav>
      <div className="flex gap-6">
        <div className={styles.searchfield}>
          <div className="bg-[#f6f3f3a6] rounded p-2 border border-[#bebdbda4] flex lg  items-center">
            <BiSearch className="mr-2 text-1xl" />
            <input type="search" className=" sm:flex-none" />
          </div>
        </div>
        <div className="flex items-center gap-4 text-lg font-bold">
          <BsCart2 className=" text-2xl cursor-pointer" />
          <CiUser className=" text-2xl cursor-pointer" />
          <FaBars className="toggleMenu cursor-pointer text-[20px]" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
