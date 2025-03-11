import React from "react";
import logo from "../assets/logoWaleKreasi.png";
import Link from "next/link";
import Image from "next/image";
import { LuBell, LuSearch } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";

const Header =() =>  {
    return (
        <nav className="w-full h-20 bg-lightText text-main_color sticky top-0 z-50">

         <div className="h-full w-full flex items-center justify-around gap-4 mdl:gap-3">
                {/* logo */}
                <Link href="/" className="px-2">
                    <Image 
                        className="w-24 object-cover"
                        src={logo} 
                        alt="Logo Wale Kreasi" 
                    />
                </Link>

                {/* searchbar */}
                <div className="flex md:inline-flex items-center relative gap-2 border-2 px-4 rounded-3xl border-main_color">
                    <span>
                    <LuSearch/>
                    </span>
                    <input className="w-full h-full p-2 placeholder:text-sm text-base" type="text" placeholder="Cari...."/>
                </div>

                <div className="inline-flex gap-4">
                    <div className="flex gap-12 text-2xl p-4  border-r-2"> 
                        {/* cart */}
                        <button>
                        <LuShoppingCart/>
                        </button>

                        {/* notification */}
                        <button className="mr-4">
                            <LuBell/>
                        </button>
                    </div>



                    <div className="flex gap-4">
                        {/* login */}
                        <button className="bg-main_color text-lightText rounded-3xl px-4 text-center">
                            Masuk
                        </button>

                        {/* buka toko */}
                        <button className="rounded-3xl border-2 border-main_color px-4 text-center">
                            Buka Toko
                        </button>
                    </div>
                </div>
            </div>

            {/* kategori */}
            <div className="w-full h-8 bg-white shadow-lg">

            </div>
        </nav>
    )
}

export default Header ; 