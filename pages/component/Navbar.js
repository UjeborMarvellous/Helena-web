import React, { useState } from "react";
import {Transition} from "@headlessui/react";
import Search from "./Search";
import { GoSearch } from "react-icons/go"
import { useSnipcart } from "use-snipcart";

const Navbar = ({setShow, size}) => {
    const [isOpen,setIsOpen] = useState(false);
    const {cart = {} } = useSnipcart();
    // const [show,setShow] = useState(true)
    return ( 
        <div className="">
            <nav className="w-full stem BG z-10">
                <div className="w-full bg-white">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items items-center py-4 bg-white justify-between w-full">
                            <div className=" mx-24 flex items items-center bg-white justify-between w-full">
                                <div className="hidden md:block">
                                    <div className="flex items-baseline space-x-4 BAG">
                                        <a href="/" className="px-3 py-2 text-md hover:font-block">Home</a>
                                        <a href="/component/Shop-file/Shop" className="px-3 py-2 text-md hover:font-block">Shop</a>
                                        <a href="/component/PhotoGallery" className="px-3 py-2 text-md hover:font-block">Photo Gallery</a>
                                        <a href="/Video" className="px-3 py-2 text-md hover:font-block">Video Gallery</a>
                                    </div>
                                    </div>
                                    <div className="flex justify-center items-center flex-shrink-0 LEFT">
                                        <i><a href="/" className="font-bold text-center text-5xl cursor-pointer">Mavric</a></i>
                                    </div>
                                    <div className="btn md">
                                        <div className="flex">
                                            <a href="/Store" className="cursor-pointer text-black font-semibold px-3 py-1 text-md hover:font-block relative border-current border-2">Contact us</a>
                                            {/* {
                                                show?<input type="search" />:null
                                            }
                                            <GoSearch onClick={()=>setShow(true)} className="ml-12 font-thin text-3xl cursor-pointer"/> */}
                                            <Search />
                                                <p className="snipcart-checkout cursor-pointer text-black font-thin px-3 py-2 text-md hover:font-block">Cart<span className="text-black font-semibold ml-2">${cart.subtotal?.toFixed(3)}</span></p>
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
                                <a href="/"  className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                                <a href="/component/Shop-file/Shop"  className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Shop</a>
                                <a  href="/component/PhotoGallery"  className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Photo Gallery</a>
                                <a href="/Video"  className="cursor-pointer hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Video Gallery</a>
                            </div>
                            <div className="btn mx-8 BX">
                                <div className="flex">
                                    <a href="/Store" className="cursor-pointer whitespace-nowrap text-black font-semibold px-6 py-2 text-md hover:font-block border-current border-2">Contact us</a>
                                    <a href="/" className="cursor-pointer whitespace-nowrap text-black font-semibold px-3 py-2 text-md hover:font-block">My Account</a>
                                    <a href="/" className="my-auto text-xl font-thin hidden"><GoSearch /></a>
                                    <a href="/" className="cursor-pointer text-black font-thin px-3 py-2 text-md hover:font-block">Cart(0) $0.00</a>
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