import React from "react";
import logo from "../assets/logoWaleKreasi.png";
import Link from "next/link";
import Image from "next/image"

const Header =() =>  {
    return (
        <nav className="w-full h-20 bg-lightText text-main_color shadow-xl sticky top-0 z-50">
         <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
             {/* logo */}
             <Link href="/" className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
                <Image 
                    src={logo} 
                    alt="Logo Wale Kreasi" 
                    width={128}  
                    height={64}  
                />
            </Link>

         </div>
        </nav>
    )
}

export default Header ; 