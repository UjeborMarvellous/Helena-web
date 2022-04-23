import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa"


const Cloth = () => {
    return ( 
        <>
            <div className="">
                <div className="GP grid grid-cols-2 my-12 mx-32 gap-12">
                    <div className="img">
                        <img src="/sh11.jpg" alt="Loading..." className="SIZE"/>
                    </div>
                    <div className="text ml-12">
                        <div className="toggle p-4 rounded-full shadow-lg w-12 fixed ml">
                            <a href="./Cloth12"><FaAngleRight className="text-black font-thin"/></a>
                        </div>
                        <div className="toggle p-4 rounded-full shadow-lg w-12 fixed MR mt-32">
                            <a href="./Cloth10"><FaAngleLeft className="text-black font-thin"/></a>
                        </div>
                        <nav className="flex">
                            <a className="text-sm font-semibold text-black" href="/">Home &nbsp;/&nbsp;</a>
                            <a className="text-sm font-semibold text-black" href="/">Sweaters &nbsp;/&nbsp;</a>
                            <p className="text-sm font-semibold text-gray-300"> Regular Fit V-Neck Sweater</p>
                        </nav>
                        <p className="text-4xl xl whitespace-nowrap font-normal mt-6">Regular Fit V-Neck Sweater</p>
                        <p className="text-2xl whitespace-nowrap font-normal mt-4">$49.00</p>
                        <p className="text-sm sm mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta<br /> iure  impedit veniam, sunt ab inventore quibusdam quisquam quo <br /> culpa ratione odio expedita animi nesciunt earum! Lorem ipsum <br /> dolor sit amet consectetur.</p>
                        <div className="color mt-8">
                            <h1 className="text-xl">Size</h1>
                            <div className="col flex mt-3">
                                <a href="/"><p className="px-4 py-2 border border-gray-300 text-sm text-gray-400 font-semibold">L</p></a>
                                <a href="/"><p className="px-4 py-2 border border-gray-300 ml-2 text-sm text-gray-400 font-semibold">M</p></a>
                                <a href="/"><p className="px-4 py-2 border border-gray-300 ml-2 text-sm text-gray-400 font-semibold">S</p></a>
                                <a href="/"><p className="px-4 py-2 border border-gray-300 ml-2 text-sm text-gray-400 font-semibold">XL</p></a>
                            </div>
                        </div>
                        <div className="color mt-8">
                            <h1 className="text-lg">Colours</h1>
                            <div className="col flex mt-2">
                                <a href="/"><p className="p-6 bg-red-200"></p></a>
                                <a href="/"><p className="p-6 bg-gray-800 ml-4"></p></a>
                                <a href="/"><p className="p-6 bg-orange-900 ml-4"></p></a>
                                <a href="/"><p className="p-6 bg-yellow-900 ml-4"></p></a>
                            </div>
                        </div>
                        <form className="color mt-8 flex">
                            <input type="number" min="0" className="px-6 py-4 bg-transparent border border-black w-24" placeholder="0" required/>
                            <button type="submit" className="bg-black text-white font-thin py-4 px-8 ml-4">ADD TO CART</button>
                        </form>
                        <div className="wish mt-12">
                            <p className="font-thin text-black text-lg relative">Add to Wishlist</p>
                            <p className=" border-current border-b block w-32"></p>
                        </div>
                        <div className="swet mt-8 flex gap-6 ">
                            <p className="text-sm text-gray-400">SKU: #1021954</p>
                            <p className="text-sm text-gray-400">Category: <span className="text-sm text-black"><a href="/"> Sweaters</a></span></p>
                        </div>
                    </div>
                </div>
                <div className="secd">
                    <nav className="text-center">
                        <a href="/" className="text-center ml-4">Description</a>
                        <a href="/" className="text-center ml-4 text-gray-400">Additional information</a>
                    </nav>
                    <p className="mb-6 mt-8 WID text-center w-3/5 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, alias! Magni voluptas vel fugit non et, necessitatibus culpa molestiae repellat laborum velit provident obcaecati unde illo temporibus pariatur sint ab dolores vitae, blanditiis est. Facere libero error corporis perferendis! Animi officiis fugit autem dolor rem possimus placeat vitae sit in Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, voluptatem.</p>
                </div>
                <div className="gids mt-12 mx-24">
                    <p className="text-4xl font-semibold my-6">Related products</p>
                    <div className="grid grid-cols-5 gra mb-16 pb-4">
                        <figure className="">
                            <img src="/sh2.jpg" alt="Loading..." className=""/>
                            <figcaption>
                                <p className="text-center">Regular Fit V-Neck Sweater</p>
                                <p className="text-center">$49.00</p>
                            </figcaption>
                        </figure>
                        <figure className="">
                            <img src="/sh3.jpg" alt="Loading..." className=""/>
                            <figcaption>
                                <p className="text-center">Regular Fit V-Neck Sweater</p>
                                <p className="text-center">$49.00</p>
                            </figcaption>
                        </figure>
                        <figure className="">
                            <img src="/sh4.jpg" alt="Loading..." className=""/>
                            <figcaption>
                                <p className="text-center">Regular Fit V-Neck Sweater</p>
                                <p className="text-center">$49.00</p>
                            </figcaption>
                        </figure>
                        <figure className="off">
                            <img src="/sh7.jpg" alt="Loading..." className=""/>
                            <figcaption>
                                <p className="text-center">Regular Fit V-Neck Sweater</p>
                                <p className="text-center">$49.00</p>
                            </figcaption>
                        </figure>
                        <figure className="get">
                            <img src="/sh11.jpg" alt="Loading..." className="absolute opacity-50 AM"/>
                            <p className="relative text-center mt-32 font-bold">SOLD OUT</p>
                            <figcaption className="mt-48 opacity-50 ">
                                <p className="text-center">Regular Fit V-Neck Sweater</p>
                                <p className="text-center">$49.00</p>
                            </figcaption>
                        </figure>
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
                            <div className="Sec lg:flex FLEX">
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
        </>
     );
}
 
export default Cloth;