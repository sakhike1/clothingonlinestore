import React from "react";
import { contactonly } from "../assets/images";
import AOS from 'aos';

const ContactSection = () => {
    AOS.init();
    return (
        <section className="relative pt-28 pb-36 bg-gradient-to-r from-slate-500 to-yellow-100 overflow-hidden">
            <div className="relative z-10 container px-4 mx-auto ">
                <p className="mb-6 text-sm text-black text-center font-semibold uppercase tracking-px">
                    Contact us
                </p>
                <h2 className="mb-14 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight md:max-w-xl mx-auto">
                    Have Some Questions? Let’s Get Connected
                </h2>
                <form
                    className="px-11 pt-9 pb-11 bg-gray-100 bg-opacity-80 md:max-w-xl mx-auto rounded-4xl shadow-12xl" data-aos="fade-up"
                    data-aos-duration="3000"
                    style={{ backdropFilter: "blur(5px)" }}
                >
                    <h3 className="mb-8 text-xl text-center font-semibold leading-normal md:max-w-sm mx-auto">
                        For anything you might need to know please send us a message
                    </h3>
                    <label className="block mb-4">
                        <input
                            className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg "
                            id="contactInput5-1"
                            type="text"
                            placeholder="First & last name"
                        />
                    </label>
                    <label className="block mb-4">
                        <input
                            className="px-4 py-3 w-full text-gray-500 font-medium placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 rounded-lg "
                            id="contactInput5-2"
                            type="email"
                            placeholder="Email"
                        />
                    </label>
                    <label className="block mb-4">
                        <textarea
                            className="p-4 w-full h-48 font-medium text-gray-500 placeholder-gray-500 bg-white bg-opacity-50 outline-none border border-blueGray-200 resize-none rounded-lg "
                            id="contactInput3-3"
                            placeholder="Write message"
                        ></textarea>
                    </label>
                    <button
                        className="py-4 hover:shadow-2xl px-9 w-full text-white font-semibold  bg-gradient-to-r from-slate-500 to-yellow-100 rounded-xl shadow-4xl   hover:bg-gray-500 transition ease-in-out duration-200"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <video
                className="absolute bottom-0 w-full object-cover transform hover:translate-y-4 transition ease-in-out duration-1000"
                style={{ height: "502px" }}
                src={contactonly}
                alt="Contact"
                autoPlay
                loop
                muted

            />


        </section>
    );
};

export default ContactSection;
