import { BsArrowRight } from "react-icons/bs"
import Link from 'next/link';

export default function Header() {
  return (
    <div>
        <main>
            <div className="head">
                <img src="/1.jpg" alt="Loading..." className="BA absolute"/>
                <div className="relative pt">
                    <h1 className='text-6xl font-semibold FG'>Ace Chair Nist <br /> Beige</h1>
                    <Link href="/component/Shop-file/Shop"><button className="BTN bg-black text-white font-semibold py-4 mt-8 px-8 flex z-50 hover:border-2 hover:bg-transparent hover:text-black hover:border-black hover:py-4 hover:px-8 ">Explore More&nbsp;&nbsp;&nbsp;<span className="my-auto text-2xl font-thin"><BsArrowRight /></span></button></Link>
                </div>
            </div>
            <p className="text-center font-normal text-black text-4xl relative my-8 Fm">Gorgeous collection to choose from. We picked every item with care <span className="pt-4"> <br />you must try atleast once in your lifetime</span></p>
            <div className="grid grid-cols-3 mx-32 my-24 AK">
                <figure>
                <img src="/2.jpg" alt="Loading..." className="" loading="lazy"/>
                    <figcaption>
                        <p className="font-semibold text-2xl my-4 text-center">Start your shopping by categories</p>
                        <p className=" whitespace-nowrap font-thin text-lg text-center"><Link href="/">GO TO CATEGORIES</Link></p>
                        <p className=" border-current border-b-2 block mx-36 MB"></p>
                    </figcaption>
                </figure>
                <figure>
                <img src="/3.jpg" alt="Loading..." className="" loading="lazy"/>
                    <figcaption>
                        <p className="font-semibold text-2xl my-4 text-center">Don’t waste your time, just go to shop and start buying</p>
                        <p className=" whitespace-nowrap font-thin text-lg text-center"><Link href="/">OUR SHOP</Link></p>
                        <p className=" border-current border-b-2 block mx-44 MB"></p>
                    </figcaption>
                </figure>
                <figure>
                <img src="/4.jpg" alt="Loading..." className="" loading="lazy"/>
                    <figcaption> 
                        <p className="font-semibold text-2xl my-4 text-center">Choose by looking how item used</p>
                        <p className=" whitespace-nowrap font-thin text-lg text-center"><Link href="/">LOOKBOOK</Link></p>
                        <p className=" border-current border-b-2 block mx-44 MB"></p></figcaption>
                </figure>

            </div>
            <p className="text-center font-normal text-black text-4xl relative my-4">Hand-picked Items</p>
            <p className=" border-current border-b-2 block mx-auto w-20"></p>
            <div className="grid grid-cols-4 my-24 GRID">
                <figure className="">
                    <img src="/5.jpg" alt="Loading..." loading="lazy"/>
                    <figcaption className="">
                        <p className="font-semibold text-lg mt-2"><Link href="/">Peeler Black</Link></p>
                        <p className="font-thin text-lg">$24.00</p>
                    </figcaption>
                </figure>
                <figure>
                <img src="/6.jpg" alt="Loading..." className="" loading="lazy"/>
                    <figcaption>
                        <p className="font-semibold text-lg mt-2"><Link href="/">Bold Wall Clock White</Link></p>
                        <p className=" whitespace-nowrap font-thin text-lg"><span className="line-through opacity-50">$135.00</span> $119.00</p>
                    </figcaption>
                </figure>
                <figure>
                <img src="/8.jpg" alt="Loading..." className="" loading="lazy"/>
                    <figcaption> 
                        <p className="font-semibold text-lg mt-2"><Link href="/">Ducky grey</Link></p>
                        <p className=" whitespace-nowrap font-thin text-lg">$38.00</p>
                    </figcaption>
                </figure>
                <figure>
                <img src="/7.jpg" alt="Loading..." className="" loading="lazy"/>
                    <figcaption> 
                        <p className="font-semibold text-lg mt-2"><Link href="/">Astro Tray all</Link></p>
                        <p className=" whitespace-nowrap font-thin text-lg">$16.00</p>
                    </figcaption>
                </figure>
            </div>
            <button className="TN bg-black text-white font-semibold py-4 mt-8 px-8 flex z-50 hover:border-2 hover:bg-transparent hover:text-black hover:border-black hover:py-4 hover:px-8 mx-auto mb-6">VIEW NORE</button>
            <div className="two bg-black p-20 grid grid-cols-2 sep">
                <div className="det">
                    <h1 className="HA text-white font-semibold text-3xl MT mt-32">We started small, Now we grown a lot with help of you. Integer magna augue, ultricies eu at. Duis et libero molestie aliquet, semper sem.</h1>
                    <button className="AN bg-white text-black font-semibold py-4 mt-8 px-16 flex z-50 hover:border-2 hover:bg-transparent hover:text-white hover:border-white hover:py-4 hover:px-16 ">SEE WHAT WE DO&nbsp;&nbsp;&nbsp;<span className="my-auto text-2xl font-thin"><BsArrowRight /></span></button>
                </div>
                <div className="img ">
                    <img src="/9.jpg" alt="Loading..." className="RA" loading="lazy"/>
                </div>
            </div>
            <div className="grid mb-6">
                <div className="grids">
                    <img src="/10.jpg" alt="Loading..." className="RA" loading="lazy"/>
                    <img src="/11.jpg" alt="Loading..." className="RA" loading="lazy"/>
                </div>
                <div className="text">
                    <h1 className="text-center text-2xl font-semibold sm">Simply looking at the items are not enough to imagine. So we have a well-made lookbook to display our</h1>
                    <h1 className="text-center text-2xl font-semibold sm">tremendous collection of items. Just look how our items can be used.</h1>
                </div>
                <button className="BTN bg-black text-white mt-16 font-semibold py-4 px-20 flex z-50 hover:border-2 hover:bg-transparent hover:text-black hover:border-black hover:py-4 hover:px-20 mx-auto">GO TO LOOKBOOK&nbsp;&nbsp;&nbsp;<span className="my-auto text-2xl font-thin"><BsArrowRight /></span></button>
            </div>
            <div className="my-8">
                <p className="text-center font-thin text-black text-4xl mt-24 mb-4 capitalize">our blog</p>
                <p className=" border-current border-b-2 block mx-auto w-20"></p>
                <div className="grid grid-cols-3 mx-32 my-24 AK gap-6">
                    <figure>
                    <img src="/12.jpg" alt="Loading..." className="" loading="lazy"/>
                        <figcaption>
                            <p className="font-thin text-lg text-gray-400 mt-4">DECEMBER 16, 2017</p>
                            <p className="font-semibold text-2xl my-2">Winter Collection ’17 by Martha Beck</p>
                            <p className=" whitespace-nowrap font-thin text-sm uppercase"><Link href="/">Read More</Link></p>
                            <p className=" border-current border-b block w-1/5 MB"></p>
                        </figcaption>
                    </figure>
                    <figure>
                    <img src="/13.jpg" alt="Loading..." className="" loading="lazy"/>
                        <figcaption>
                            <p className="font-thin text-lg text-gray-400 mt-4">DECEMBER 17, 2017</p>
                            <p className="font-semibold text-2xl my-2">10 Nordic items to make your living space awesome</p>
                            <p className=" whitespace-nowrap font-thin text-sm uppercase"><Link href="/">Read More</Link></p>
                            <p className=" border-current border-b block w-1/5 MB"></p>
                        </figcaption>
                    </figure>
                    <figure>
                    <img src="/14.jpg" alt="Loading..." className="" loading="lazy"/>
                        <figcaption> 
                            <p className="font-thin text-lg text-gray-400 mt-4">DECEMBER 16, 2017</p>
                            <p className="font-semibold text-2xl my-2">New Launch – Normann Copenhangen rise wall lamp</p>
                            <p className=" whitespace-nowrap font-thin text-sm uppercase"><Link href="/">Read More</Link></p>
                            <p className=" border-current border-b block w-1/5 MB"></p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </main>
    </div>
  )
}
