import React, { useState, useEffect } from "react";
import { safezones, safezone, fire } from "../assets/images";
import { Link } from 'react-router-dom'; // Import your videos

const Cta4 = () => {
    const [bgColor1, setBgColor1] = useState("bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400");
    const [bgColor2, setBgColor2] = useState("bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400");

    // Array of gradient colors
    const gradientColors = [
        "bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400",
        "bg-gradient-to-r from-blue-300 via-green-300 to-blue-500",
        "bg-gradient-to-r from-purple-300 via-red-300 to-orange-500",
        "bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400",
    ];

    // Function to change the background color for both sections every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setBgColor1((prev) => {
                const currentIndex = gradientColors.indexOf(prev);
                return gradientColors[(currentIndex + 1) % gradientColors.length];
            });
            setBgColor2((prev) => {
                const currentIndex = gradientColors.indexOf(prev);
                return gradientColors[(currentIndex + 1) % gradientColors.length];
            });
        }, 10000); // 10 seconds interval

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures the effect runs once on mount

    return (
        <section id="hero" className="w-full -mt-[50px]">

            <div data-aos="fade-up"
                data-aos-duration="3000" className="max-w-[1200px] rounded-lg   mx-auto p-4">
                <div className="mx-auto container  py-8 -mt-[450px] px-4 md:px-6 2xl:px-0 flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0">
                        {/* First Video Section */}
                        <div className="relative w-full lg:w-auto hover:shadow-xl">
                            <video
                                className="w-full h-auto lg:h-full object-cover"
                                src={safezone}
                                autoPlay
                                loop
                                muted
                                alt="Bate Video"
                            />
                            <div className={`absolute hover:shadow-xl bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 ${bgColor1} flex flex-col justify-start items-start`}>
                                <p className="text-lg sm:text-2xl font-semibold leading-6 text-gray-900">Skipaman Summer</p>
                                <p className="mt-2 text-sm sm:text-base leading-6 text-gray-600">Check these summer vibes out</p>
                                <Link to="/Product" className="relative m-2 rounded-full hover:shadow-2xl overflow-hidden p-4 w-full sm:w-[200px]">
                                    <video className="absolute inset-0 w-full h-full object-cover rounded-full hover:opacity-80 transition-opacity duration-300" autoPlay loop muted>
                                        <source src={fire} type="video/mp4" />
                                    </video>
                                    <span className="relative ml-10 z-10 text-white text-sm sm:text-base">Get hot now</span>
                                </Link>
                            </div>
                        </div>

                        {/* Second Video Section */}
                        <div className="relative w-full lg:w-auto hover:shadow-xl">
                            <video
                                className="w-full h-auto lg:h-full object-cover"
                                src={safezones}
                                autoPlay
                                loop
                                muted
                                alt="Clips Video"
                            />
                            <div className={`absolute hover:shadow-xl bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 ${bgColor2} flex flex-col justify-start items-start`}>
                                <p className="text-lg sm:text-2xl font-semibold leading-6 text-gray-900">Skipaman Cipher</p>
                                <p className="mt-2 text-sm sm:text-base leading-6 text-gray-900">Get these street urban vibes now</p>
                                <Link to="/Product" className="relative m-2 rounded-full hover:shadow-2xl overflow-hidden p-4 w-full sm:w-[200px]">
                                    <video className="absolute inset-0 w-full h-full object-cover rounded-full hover:opacity-80 transition-opacity duration-300" autoPlay loop muted>
                                        <source src={fire} type="video/mp4" />
                                    </video>
                                    <span className="relative ml-10 z-10 text-white text-sm sm:text-base">Check it out</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta4;
