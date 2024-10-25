import React from "react";
import Button from "../components/Button.jsx";
import { tShirtImage, fire } from "../assets/images"; // Adjust imports as needed
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero = () => {
    AOS.init();

    return (
        <section id="hero" className="w-full -mt-[450px]" data-aos="fade-up" data-aos-duration="3000">
            <div className="max-w-6xl mx-auto p-4">
                <div className="flex flex-col items-left justify-center">
                    <h1 className="text-4xl font-semibold leading-9 text-left text-gray-800">New summer vibes</h1>
                    <p className="text-base leading-normal text-left text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
                        our Skipaman votex is the perfect choice this summer. With its lightweight and breathable design, you'll stay cool and comfortable all day long.
                    </p>
                </div>

                <div className="lg:flex items-stretch md:mt-12 mt-8">
                    <div className="lg:w-1/2">
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                            <div className="sm:w-1/2 relative">
                                <img src={tShirtImage} className="w-full rounded-lg hover:shadow-2xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900" alt="T-shirt" />
                            </div>
                            <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                                <img src={tShirtImage} className="w-full rounded-lg hover:shadow-2xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900" alt="T-shirt" />
                            </div>
                        </div>

                        <div className="relative">
                            <img src={tShirtImage} alt="T-shirt" className="w-full rounded-lg hover:shadow-2xl mt-8 md:mt-6 hidden sm:block bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900" />
                            <img className="w-full mt-4 sm:hidden rounded-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900" src={tShirtImage} alt="T-shirt" />
                        </div>
                    </div>

                    <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                        <div className="relative">
                            <img src={tShirtImage} alt="T-shirt" className="w-full rounded-lg hover:shadow-2xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 sm:block hidden" />
                            <img className="w-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 sm:hidden" src={tShirtImage} alt="T-shirt" />
                        </div>

                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                            <div className="relative w-full">
                                <img src={tShirtImage} className="w-full rounded-lg hover:shadow-2xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900" alt="T-shirt" />
                            </div>
                            <div className="relative w-full sm:mt-0 mt-4">
                                <img src={tShirtImage} className="w-full rounded-lg hover:shadow-2xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900" alt="T-shirt" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Burning Button aligned with content */}
            <div className="flex justify-start ml-[274px] mt-10 max-w-7xl mx-auto">
                <Link to="/Product">
                    <button className="relative hover:shadow-2xl rounded-lg overflow-hidden p-4 w-[200px]"> {/* Increase button width here */}
                        <video className="absolute inset-0 w-full h-full object-cover rounded-full hover:opacity-80 transition-opacity duration-300" autoPlay loop muted>
                            <source src={fire} type="video/mp4" />
                        </video>
                        <span className="relative z-10 text-white  text-lg">The hottest</span>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
