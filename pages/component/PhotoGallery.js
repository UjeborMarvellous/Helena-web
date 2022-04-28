import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"

const PhotoGallery = () => {
    return ( 
        <>
            <div className="grid grid-cols-1 gap-4 mx-12 aspec">
                <div className="UN">
                <p className="hone font-bold text-5xl text-center my-8 fon">FURNITURE</p>
                    <div className="grid grid-cols-3 gap-4 CLASS">
                        <a href="/"><img src="/Chair1.jpg" alt="Loading..." className="GT"/></a>
                        <a href="/"><img src="/Chair2.jpg" alt="Loading..." className="GT"/></a>
                        <a href="/"><img src="/Chair3.jpg" alt="Loading..." className="GT"/></a>
                        <a href="/"><img src="/Chair4.jpg" alt="Loading..." className="GT"/></a>
                        <a href="/"><img src="/Chair5.jpg" alt="Loading..." className="GT"/></a>
                    </div>
                </div>
                <div className="next">
                    <p className="hone font-bold text-5xl text-center my-8 fon">CLOTHES <span className="font-semibold text-3xl XL text-blue-500">(Uni<span className="text-pink-500">sex)</span></span></p>
                    <div className="grid grid-cols-3 gap-4 CLASS">
                        <a href="/"><img src="/jeans.jpg" alt="Loading..." className=""/></a>
                        <a href="/"><img src="/suit.jpg" alt="Loading..." className=""/></a>
                        <a href="/"><img src="/sweater.jpg" alt="Loading..." className=""/></a>
                        <a href="/"><img src="/unisex.jpg" alt="Loading..." className=""/></a>
                        <a href="/"><img src="/sweater2.jpg" alt="Loading..." className=""/></a>
                    </div>
                </div>
            </div>
            <div className="read">
                <p className="text-center mt-10 text-xl text-blue-500 underline">VIEW MORE</p>
            </div>
            <div className="bg-black p-4 mt-12">
                    <div className="grid grid-cols-2 gap-2 GB">
                        <div className="">
                            <h1 className="font-bold ml-auto mt-16 lg:block lg:mx-auto mr-32  text-white text-2xl p-3 lg:hidden rounded-full border-4 border-white block text-center w-16">h.</h1>
                            <div className="Thrid flex">
                                <a href="/" className="text-3xl ml-10 mt-8 text-white"><FaFacebookF /></a>
                                <a href="/" className="text-3xl ml-10 mt-8 text-white"><BsTwitter /></a>
                                <a href="/" className="text-3xl ml-10 mt-8 text-white"><FaWhatsapp /></a>
                                <a href="/" className="text-3xl ml-10 mt-8 text-white"><SiInstagram /></a>
                            </div>
                            <p className="text-gray-500 mt-16 text-white whitespace-nowrap RES">Copyright © AgniHD 2017 All Rights Reserved.</p>
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
 
export default PhotoGallery;