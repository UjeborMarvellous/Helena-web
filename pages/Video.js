import  ReactPlayer from 'react-player';
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import Footertwo from './component/Footertwo'
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
            <h1 className="font-bold text-center text-4xl my-10">Bed Set</h1>
            <div className="grid grid-cols-2 gap-8 mx-24 fur">
                <figure>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=lQ41TIGhovM"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=aU9XG38WEwg"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=K5T_Vuzdm1I"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
                <figure>
                    <ReactPlayer className="wth" width="100%" controls url="https://www.youtube.com/watch?v=AG10aZASOtU"/>
                    <figcaption>
                        <p className="font-semibold mt-6 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, ducimus corporis? Quam totam ab consequatur assumenda soluta placeat vitae temporibus.</p>
                    </figcaption>
                </figure>
            </div>
        </div>
        <Footertwo />
        
        </>
     );
}
 
export default Video;