import  ReactPlayer from 'react-player';
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"

const Video = () => {
    return ( 
        <>
        <div className="">
            <h1 className="font-bold text-center text-4xl my-10">FURNITURES</h1>
            <div className="grid grid-cols-2 gap-8 mx-24 fur">
                <figure className=''>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=K5T_Vuzdm1I"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure className=''>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=AG10aZASOtU"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure className='my-10'>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=aU9XG38WEwg"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure className='my-10'>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=lQ41TIGhovM"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div className=" mt-16">
            <h1 className="font-bold text-center text-4xl my-10">CLOTHES</h1>
            <div className="grid grid-cols-2 gap-8 mx-24 fur">
                <figure>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=sGfRuQ1CG2s"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure>
                    <ReactPlayer className="wth" width="100%" controls url="youtube.com/watch?v=A1CXIHkHvb0"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=gISNogQdJo4"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=t4Y5K2EmcUA"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
            </div>
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
 
export default Video;