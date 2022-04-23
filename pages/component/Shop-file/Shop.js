import { useState } from "react";
import {Transition} from "@headlessui/react";
import { GoSearch } from "react-icons/go"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"




function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    const [open,setOpen] = useState(false);
    return ( 
        <div className="">
                    <div className="lg:grid lg:grid-cols-1 Ag">
                    <div className="grid grid-cols-6 g mt-12 mx-12 MX">
                        <div className="one">
                            <h1 className="text-lg">Categories</h1>
                            <p className=" border-current border-b mt-2 w-8"></p>
                            <div className="input">
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Bags&nbsp; & &nbsp; Backpacks</a> <span className="ml-9 text-gray-300 font-bold">(4)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Braclets</a><span className="ml-32 text-gray-300 font-bold">(2)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Dresses</a><span className="ml-32 text-gray-300 font-bold">(6)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Earrings</a><span className="ml-32 text-gray-300 font-bold">(2)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Essentials</a><span className="ml-28 text-gray-300 font-bold">(5)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Gift &nbsp; Ideas</a><span className="ml-24 text-gray-300 font-bold">(4)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Kitchen</a><span className="ml-32 text-gray-300 font-bold">(3)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Rings</a><span className="ml-32 text-gray-300 font-bold">(2)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Shoes</a><span className="ml-32 text-gray-300 font-bold">(4)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Sweaters</a><span className="ml-28 text-gray-300 font-bold">(10)</span></p>
                                <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Wedding</a><span className="ml-28 text-gray-300 font-bold">(1)</span></p>
                            </div>
                            <hr  className="my-6"/>
                            <div className="color mt-16">
                                <h1 className="text-lg">By Colours</h1>
                                <p className=" border-current border-b w-12"></p>
                                <div className="col flex mt-6">
                                    <a href="/"><p className="p-3 bg-red-200 ml-4"></p></a>
                                    <a href="/"><p className="p-3 bg-gray-800 ml-4"></p></a>
                                    <a href="/"><p className="p-3 bg-orange-900 ml-4"></p></a>
                                    <a href="/"><p className="p-3 bg-yellow-900 ml-4"></p></a>
                                </div>
                                <div className="dev flex mt-3">
                                    <a href="/"><p className="p-3 bg-indigo-300 ml-4"></p></a>
                                    <a href="/"><p className="p-3 bg-pink-600 ml-4"></p></a>
                                </div>
                            </div>
                            <hr className="my-6"/>
                            <div className="color mt-16">
                                <h1 className="text-lg">By Size</h1>
                                <p className=" border-current border-b w-12"></p>
                                <div className="col flex mt-6">
                                    <a href="/"><p className="px-2 py-1 border border-black ml-2 text-sm">L</p></a>
                                    <a href="/"><p className="px-2 py-1 border border-black ml-2 text-sm">M</p></a>
                                    <a href="/"><p className="px-2 py-1 border border-black ml-2 text-sm">S</p></a>
                                    <a href="/"><p className="px-2 py-1 border border-black ml-2 text-sm">XL</p></a>
                                </div>
                            </div>
                            <hr className="my-6"/>
                        </div>
                        <div className="sec col-span-5">
                            <div className="mx-16">
                                    <a href="/">Home</a>/
                                    <a href="component/Shop-file/Shop">Shop</a>
                                    <p className="text-4xl font-semibold my-6">Shop</p>
                            </div>
                            <div className="nav flex my-4">
                            <div className="mr-10 flex lg:hidden absolute">
                                <button onClick={()=>setOpen(!open)} type="button" className="text-black" aria-controls="mobile-menu" aria-expanded="false"><span className="sr-only">Open main menu</span>
                                    {!open ? (
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
                    <Transition show={open} className="" enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            {(ref) => (
                                <div ref={ref} className="lg:hidden id=mobile-menu bg-white mt-8">
                                    <div className="p-8 absolute bg-white over">
                                        <h1 className="text-lg">Categories</h1>
                                        <p className=" border-current border-b mt-2 w-8"></p>
                                        <div className="input">
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Bags&nbsp; & &nbsp; Backpacks</a> <span className="ml-9 text-gray-300 font-bold">(4)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Braclets</a><span className="ml-32 text-gray-300 font-bold">(2)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Dresses</a><span className="ml-32 text-gray-300 font-bold">(6)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Earrings</a><span className="ml-32 text-gray-300 font-bold">(2)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Essentials</a><span className="ml-28 text-gray-300 font-bold">(5)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Gift &nbsp; Ideas</a><span className="ml-24 text-gray-300 font-bold">(4)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Kitchen</a><span className="ml-32 text-gray-300 font-bold">(3)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Rings</a><span className="ml-32 text-gray-300 font-bold">(2)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Shoes</a><span className="ml-32 text-gray-300 font-bold">(4)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Sweaters</a><span className="ml-28 text-gray-300 font-bold">(10)</span></p>
                                            <p className=" mt-3 ml-6"><input type="checkbox" /><a href="/" className="text-sm">&nbsp;&nbsp;Wedding</a><span className="ml-28 text-gray-300 font-bold">(1)</span></p>
                                        </div>
                                        <hr  className="my-6"/>
                                        <div className="color mt-16">
                                            <h1 className="text-lg">By Colours</h1>
                                            <p className=" border-current border-b w-12"></p>
                                            <div className="col flex mt-6">
                                                <a href="/"><p className="p-3 bg-red-200 ml-4"></p></a>
                                                <a href="/"><p className="p-3 bg-gray-800 ml-4"></p></a>
                                                <a href="/"><p className="p-3 bg-orange-900 ml-4"></p></a>
                                                <a href="/"><p className="p-3 bg-yellow-900 ml-4"></p></a>
                                            </div>
                                            <div className="dev flex mt-3">
                                                <a href="/"><p className="p-3 bg-indigo-300 ml-4"></p></a>
                                                <a href="/"><p className="p-3 bg-pink-600 ml-4"></p></a>
                                            </div>
                                        </div>
                                        <hr className="my-6"/>
                                        <div className="color mt-16">
                                            <h1 className="text-lg">By Size</h1>
                                            <p className=" border-current border-b w-12"></p>
                                            <div className="col flex mt-6">
                                                <a href="/"><p className="px-2 py-1 border border-black ml-2 text-sm">L</p></a>
                                                <a href="/"><p className="px-2 py-1 border border-black ml-2 text-sm">M</p></a>
                                                <a href="/"><p className="px-2 py-1 border border-black ml-2 text-sm">S</p></a>
                                                <a href="/"><p className="px-2 py-1 border border-black ml-2 text-sm">XL</p></a>
                                            </div>
                                        </div>
                                        <hr className="my-6"/>
                                    </div>
                                </div>
                                
                            )}
                        </Transition>
                                <div className="hs ml-12">
                                    <select name="Clothes" className="bg-none border-none p">
                                        <option value="Default sorting" className="outline-none hover:bg-white">Default sorting</option>
                                        <option value="sort by popularity" className="outline-none hover:bg-white">sort by popularity</option>
                                        <option value="sort by latest" className="outline-none hover:bg-white">sort by latest</option>
                                        <option value="sort by price:low to high" className="outline-none hover:bg-white">sort by price:low to high</option>
                                        <option value="sort by price:high to low" className="outline-none hover:bg-white">sort by price:high to low</option>
                                    </select>
                                </div>
                                <div className="As flex block mx-auto ">
                                    <a href="/" className="text-sm font-thin">1&nbsp;&nbsp;/&nbsp;&nbsp;</a>
                                    <a href="/" className="text-sm font-thin">2&nbsp;&nbsp;/&nbsp;&nbsp;</a>
                                    <a href="/" className="text-sm font-thin">3</a>
                                    <a href="/" className="text-xl font-thin"><MdOutlineKeyboardArrowRight /></a>
                                </div>
                                <div className="As">
                                    <p>1&nbsp;-&nbsp;16&nbsp;&nbsp;<span className="DIS"> of&nbsp;&nbsp;42&nbsp;items</span></p>
                                </div>
                            </div>
                            <div className="imgs grid grid-cols-4 gray mx-16">
                                <figure>
                                    <a href="./Clothpage/Cloth"><img src="/sh1.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth2"><img src="/sh2.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth3"><img src="/sh3.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth4"><img src="/sh4.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth5"><img src="/sh5.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth6"><img src="/sh6.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth7"><img src="/sh7.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth8"><img src="/sh8.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth9"><img src="/sh9.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure className="get">
                                    <a href="./Clothpage/Cloth10"><img src="/sh10.jpg" alt="Loading..." className="absolute opacity-50 h-2/4"/></a>
                                    <p className="relative text-center mt-32">SOLD OUT</p>
                                    <figcaption className="mt-52 opacity-50 ">
                                        <p className="text-center text-opacity-100">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure className="get">
                                    <a href="./Clothpage/Cloth11"><img src="/sh11.jpg" alt="Loading..." className="absolute opacity-50 h-2/4"/></a>
                                    <p className="relative text-center mt-32">SOLD OUT</p>
                                    <figcaption className="mt-52 opacity-50 ">
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth12"><img src="/sh12.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth13"><img src="/sh13.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth14"><img src="/sh14.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth15"><img src="/sh15.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <a href="./Clothpage/Cloth16"><img src="/sh16.jpg" alt="Loading..." className=""/></a>
                                    <figcaption>
                                        <p className="text-center">Regular Fit V-Neck Sweater</p>
                                        <p className="text-center">$49.00</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="flex my-12 justify-center">
                                <a href="/" className="text-sm text-center font-thin">1&nbsp;&nbsp;/&nbsp;&nbsp;</a>
                                <a href="/" className="text-sm text-center font-thin">2&nbsp;&nbsp;/&nbsp;&nbsp;</a>
                                <a href="/" className="text-sm text-center font-thin">3</a>
                                <a href="/" className="text-xl text-center font-thin"><MdOutlineKeyboardArrowRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="bg-black p-12">
                        <div className="grid grid-cols-2 gap-2 GB">
                            <div className="">
                                <div className="Thrid flex">
                                    <a href="/" className="text-3xl ml-10 mt-8 text-white"><FaFacebookF /></a>
                                    <a href="/" className="text-3xl ml-10 mt-8 text-white"><BsTwitter /></a>
                                    <a href="/" className="text-3xl ml-10 mt-8 text-white"><FaWhatsapp /></a>
                                    <a href="/" className="text-3xl ml-10 mt-8 text-white"><SiInstagram /></a>
                                </div>
                                <p className="text-gray-500 mt-16 text-white whitespace-nowrap RES">Copyright © AgniHD 2017 All Rights Reserved.</p>
                            </div>
                            <div className="two ml-auto">
                                <div className="Sec lg:flex">
                                    <p className="mt-2"><a href="/" className="mt-12 text-white whitespace-nowrap">Terms & Policies&nbsp;/&nbsp;</a></p>
                                    <p className="mt-2"><a href="/" className="mt-12 text-white whitespace-nowrap">FAQ&nbsp;/&nbsp;</a></p>
                                    <p className="mt-2"><a href="/" className="mt-12 text-white whitespace-nowrap">Contact Us&nbsp;/&nbsp;</a></p>
                                    <p className="mt-2"><a href="/" className="mt-12 text-white whitespace-nowrap">About Us</a></p>
                                </div>
                                <h1 className="font-bold ml-auto mt-16 text-white text-2xl p-3 rounded-full border-4 border-white block text-center w-16 HK ABS">h.</h1>
                            </div>
                        </div>
                    </div>
            </div>
     );
}
 
export default Navbar;