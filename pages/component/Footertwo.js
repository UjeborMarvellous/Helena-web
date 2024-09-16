import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"


const Footer = () => {
    return ( 
        <>
        <div className="bg-black p-4 mt-12">
                <div className="grid grid-cols-2 gap-2 GB">
                    <div className="">
                        <h1 className="font-bold ml-auto mt-16 lg:mx-auto mr-32  text-white text-2xl p-3 lg:hidden rounded-full border-4 border-white block text-center w-16">h.</h1>
                        <div className="Thrid flex">
                            <a href="/" className="text-3xl ml-10 mt-8 text-white"><FaFacebookF /></a>
                            <a href="/" className="text-3xl ml-10 mt-8 text-white"><BsTwitter /></a>
                            <a href="/" className="text-3xl ml-10 mt-8 text-white"><FaWhatsapp /></a>
                            <a href="/" className="text-3xl ml-10 mt-8 text-white"><SiInstagram /></a>
                        </div>
                        <p className="ml-6 mt-16 text-white whitespace-nowrap RES">Copyright © AgniHD 2017 All Rights Reserved.</p>
                    </div>
                    <div className="two ml-auto">
                        <div className="Sec sm:flex FLEX">
                            <p className="mt-2"><a href="/" className="mt-4 text-white whitespace-nowrap">Terms & Policies&nbsp;/&nbsp;</a></p>
                            <p className="mt-2"><a href="/" className="mt-4 text-white whitespace-nowrap">FAQ&nbsp;/&nbsp;</a></p>
                            <p className="mt-2"><a href="/" className="mt-4 text-white whitespace-nowrap">Contact Us&nbsp;/&nbsp;</a></p>
                            <p className="mt-2"><a href="/" className="mt-4 text-white whitespace-nowrap">About Us</a></p>
                        </div>
                        <h1 className="sA font-bold ml-auto mt-4 text-white text-2xl p-3 rounded-full border-4 border-white block text-center w-16 HK ABS">h.</h1>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Footer;