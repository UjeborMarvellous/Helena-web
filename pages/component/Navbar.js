import React, { useState } from "react";
import {Transition} from "@headlessui/react";
import { Link } from "react-scroll";
import { GoSearch } from "react-icons/go"


function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    return ( 
        <div className="">
            <nav className="w-full stem BG z-10">
                <div className="w-full bg-white">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items items-center py-4 bg-white justify-between w-full">
                            <div className=" mx-24 flex items items-center bg-white justify-between w-full">
                                <div className="hidden md:block">
                                    <div className="flex items-baseline space-x-4 BAG">
                                            <Link activeClass="Home" smooth={true} offset={50} duration={500} className="cursor-pointer px-3 py-2 text-md hover:font-block">Home</Link>
                                            <Link activeClass="Product" smooth={true} offset={50} duration={500} className="cursor-pointer px-3 py-2 text-md hover:text-red">Shop</Link>
                                            <Link activeClass="Pricing" smooth={true} offset={50} duration={500} className="cursor-pointer px-3 py-2 text-md hover:text-red">Pages</Link>
                                            <Link activeClass="About" smooth={true} offset={50} duration={500} className="cursor-pointer px-3 py-2 text-md hover:text-red">Elements</Link>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center flex-shrink-0 LEFT">
                                        <i><h1 className="font-bold text-center text-5xl cursor-pointer">halena</h1></i>
                                    </div>
                                    <div className="btn md">
                                        <div className="flex">
                                            <Link activeClass="Store Locator" smooth={true} offset={50} duration={500} className="cursor-pointer text-black font-semibold px-3 py-1 text-md hover:font-block border-current border-2">Store Locator</Link>
                                            <Link activeClass="My Account" smooth={true} offset={50} duration={500} className="cursor-pointer text-black font-semibold px-3 py-2 text-md hover:font-block">My Account</Link>
                                            <p className="my-auto text-xl font-thin"><GoSearch /></p>
                                            <Link activeClass="Cart page" smooth={true} offset={50} duration={500} className="cursor-pointer text-black font-thin px-3 py-2 text-md hover:font-block">Cart(0) $0.00</Link>
                                        </div>
                                    </div>
                               </div>
                            
                            </div>
                            <div className="mr-10 flex lg:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black focus: outline-none focus:ring-offset-2 focus:ring-offset-black focus:ring-white" aria-controls="mobile-menu" aria-expanded="false"><span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16M4"></path>
                                        </svg>
                                    ):(
                                        <svg className="block h-6 w-6" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    {(ref) => (
                        <div className="lg:hidden id=mobile-menu bg-white">
                            <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link href="/home" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                                <Link href="/product" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Product</Link>
                                <Link href="/pricing" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
                                <Link href="/about" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                                <Link href="/contact us" activeClass="home" to="home" smooth={true} offset={50} duration={500} className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
                            </div>
                            <div className="btn mx-8 BX">
                                <div className="flex">
                                    <Link activeClass="Store Locator" smooth={true} offset={50} duration={500} className="cursor-pointer whitespace-nowrap text-black font-semibold px-6 py-2 text-md hover:font-block border-current border-2">Store Locator</Link>
                                    <Link activeClass="My Account" smooth={true} offset={50} duration={500} className="cursor-pointer whitespace-nowrap text-black font-semibold px-3 py-2 text-md hover:font-block">My Account</Link>
                                    <p className="my-auto text-xl font-thin hidden"><GoSearch /></p>
                                    <Link activeClass="Cart page" smooth={true} offset={50} duration={500} className="cursor-pointer hidden text-black font-thin px-3 py-2 text-md hover:font-block">Cart(0) $0.00</Link>
                                </div>
                            </div>
                        </div>
                        
                    )}
                </Transition>
            </nav>
        </div>
     );
}
 
export default Navbar;