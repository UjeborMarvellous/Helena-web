import React from 'react';
import Swal from 'sweetalert2'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { SiInstagram } from "react-icons/si"

function sweetalert() {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
}

const Store = () => {
    return (
        <>
        <div className="alls">
        <div
        className="relative shadow-lg"
      >
        <img
          className="w-full object-cover min "
          src="/contact-us.jpg"
          alt="contact us"
        />
        <div
          style={{ background: "rgba(255,255,255,0.8)" }}
          className="absolute bottom-0 left-0 right-0 py-4"
        >
          <div className="flex items-center justify-between px-5 container mx-auto">
            <div>
              <h2 className="font-semibold text-lg">Contact Us</h2>
            </div>
            <div>
              <p className="text-sm">
                <a href="/"><span>Home</span></a>
                <a href="/Store"><span className="text-secondary font-semibold ml-8">Contact Us</span></a>
              </p>
            </div>
          </div>
        </div>
      </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-12 md:mx-24 mx-10">
                <div
                  className="px-3 grid grid-cols-4"
                  style={{ boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.06)" }}
                >
                  <div className="grid place-content-center">
                    <div
                      className="h-12 w-12 grid place-content-center rounded-full"
                    >
                      <img src={`/Email.jpg`} alt="mail" />
                    </div>
                  </div>
                  <div className="col-span-3 py-6">
                    <h5 className="font-semibold">Email</h5>
                    <a href="mailto:marvic230@gmail.com" className="text-blue-400 hover:text-blue-600 hover:underline">marvic230@gmail.com</a>
                  </div>
                </div>
                <div
                  className="px-3 grid grid-cols-4"
                  style={{ boxShadow: "0px 0px 18px rgba(0, 0, 0, 0.06)" }}
                >
                  <div className="grid place-content-center">
                    <div
                      className="h-12 w-12 grid place-content-center rounded-full"
                    >
                      <img src={`/Phone.jpg`} alt="Phone" className="h-12 w-12 grid place-content-center rounded-full"/>
                    </div>
                  </div>
                  <div className="col-span-3 py-6">
                    <h5 className="font-semibold">Phone</h5>
                    <a
                    href="https://wa.me/2347081641127"
                    className="flex text-blue-400 hover:text-blue-600 hover:underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    +2347081641127
                  </a>
                  </div>
                </div>
            </div>
            <div className="mb-10 md:mx-24  ml">
                <h2 className="text-2xl font-semibold">Get In Touch With Us</h2>
                <p>
                  Your email address will not be published. Required fields are
                  marked*
                </p>
            </div>
            <div className="grid grid-cols-2 gap-10 mx-24 MN">
                <div className="form">
                    <form>
                        <div className="mb-5">
                          <input
                            type="text"
                            placeholder="Full Name"
                            className="px-3 py-2 rounded w-full focus:outline-none border-b focus:border-gray-700 shadow-lg"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <input
                            type="text"
                            placeholder="Email"
                            className="px-3 py-2 rounded w-full focus:outline-none border-b focus:border-gray-700 shadow-lg"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <input
                            type="text"
                            placeholder="Request"
                            className="px-3 py-2 rounded w-full focus:outline-none border-b focus:border-gray-700 shadow-lg"
                            required
                          />
                        </div>
                        <div className="mb-5">
                          <textarea
                            rows={3}
                            className="px-3 py-2 rounded w-full focus:outline-none border-b focus:border-gray-700 shadow-lg"
                            placeholder="Send a message...."
                            required
                          ></textarea>
                        </div>
                        <button onClick={sweetalert} className="bg-black py-3 px-8 text-white rounded text-sm block mx-auto font-semibold shadow-2xl hover:bg-transparent hover:border hover:border-red-500 hover:text-red-500">
                          Send Message
                        </button>
                    </form>
                </div>
                <div className="map">
                    <div>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.8408132807!2d7.379827471333515!3d9.0242493682335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja!5e0!3m2!1sen!2sng!4v1646396843032!5m2!1sen!2sng"
                        className="border-none w-full full"
                        loading="lazy"
                        ></iframe>
                    </div>
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
        </div>
        </>
    );
}

export default Store;