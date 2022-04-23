import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"

export default function Fotter() {
  return (
    <div>
        <div className="grid grid-cols-4 gap-2 GH">
            <div className="First">
                <h1 className="font-bold text-2xl p-3 rounded-full border-4 border-black block text-center w-16 HK">h.</h1>
                <p className="text-gray-500 whitespace-nowrap">Copyright © AgniHD 2017 All Rights Reserved.</p>
            </div>
            <div className="Sec ml-12">
                <p className="mt-2"><a href="/" className="mt-12">Terms & Policies</a></p>
                <p className="mt-2"><a href="/" className="mt-12">FAQ</a></p>
                <p className="mt-2"><a href="/" className="mt-12">Contact Us</a></p>
                <p className="mt-2"><a href="/" className="mt-12">About Us</a></p>
            </div>
            <div className="Thrid flex">
                <a href="/" className="text-3xl ml-4 mt-8"><FaFacebookF /></a>
                <a href="/" className="text-3xl ml-4 mt-8"><BsTwitter /></a>
                <a href="/" className="text-3xl ml-4 mt-8"><FaWhatsapp /></a>
                <a href="/" className="text-3xl ml-4 mt-8"><SiInstagram /></a>
            </div>
            <div className="forth">
               <h1 className="font-thin text-2xl my-4">Stay Updated</h1>
               <input type="email" placeholder="Email..." className="border-2 border-black py-4 px-24 px" required/>
            </div>
        </div>
        
    </div>
  )
}
