import React from "react";
import logo from "../assets/logoWaleKreasi.png";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";

const Header =() =>  {
    return (
        <nav className="w-full h-20 bg-lightText text-main_color shadow-xl sticky top-0 z-50">
         <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
             {/* logo */}
             <Link href="/" className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
                <Image 
                    className="w-24 object-cover"
                    src={logo} 
                    alt="Logo Wale Kreasi" 
                />
            </Link>

             {/* searchbar */}
            <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
                <input className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none
                focus-visible:border-main_color" type="text" placeholder="Cari...."/>
                <span className="w-12 h-full bg-lightText text-black text-2xl flex
                items-center justify-center absolute right-0 rounded-md rounded-br-md">
                <HiOutlineSearch/>
                </span>
            </div>

            

         </div>
        </nav>
    )
}

export default Header ; 