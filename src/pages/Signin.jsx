import React, { useState } from 'react';
import { safezones } from "../assets/images";

const SignupSection = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    const slides = [
        {
            img: 'atis-assets/illustrations/pablo-coming-soon-dark-mono.png',
            title: 'So much more than a business analytics tool',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.',
        },
        {
            img: 'atis-assets/illustrations/pablo-coming-soon-dark-mono.png',
            title: 'Beyond Analytics: Unveiling Business Potential',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.',
        },
        {
            img: 'atis-assets/illustrations/pablo-coming-soon-dark-mono.png',
            title: 'Data Dynamics: Expanding Business Insights',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.',
        },
        {
            img: 'atis-assets/illustrations/pablo-coming-soon-dark-mono.png',
            title: 'Analytics Unleashed: Elevating Business Impact',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.',
        }
    ];

    return (
        <section>
            <div className="flex  flex-wrap">
                <div className="pt-6 lg:pt-16 h-[600px] pb-6 w-full lg:w-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900">
                    <div className="max-w-md mx-auto ">

                        <div >
                            <div className="mb-6 px-3">
                                <span className="text-gray-100">Login</span>
                            </div>
                            <form>

                                <div className="mb-3 flex border p-4 mx-2 bg-gray-50 rounded">
                                    <input
                                        className="w-full text-xs bg-gray-50 outline-none"
                                        type="email"
                                        placeholder="name@email.com"
                                    />
                                    <svg
                                        className="h-6 w-6 ml-4 my-auto text-gray-300"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </div>
                                <div className="mb-6 flex border p-4 mx-2 bg-gray-50 rounded">
                                    <input
                                        className="w-full text-xs bg-gray-50 outline-none"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                    <button>
                                        <svg
                                            className="h-6 w-6 ml-4 my-auto text-gray-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="px-3 text-center">
                                    <button className="mb-2 w-full hover:shadow-2xl py-4 bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 hover:bg-gray-700 rounded text-sm font-bold text-gray900 transition duration-200">
                                        Login
                                    </button>
                                    <span className="text-gray-900 text-xs">
                                        <span>Already have an account?</span>
                                        <a className="text-gray-100 ml-5 hover:underline" href="signup">
                                            Sign up
                                        </a>
                                    </span>
                                    <p className="mt-16 text-xs text-gray-100">
                                        <a className="underline hover:text-gray-500" href="#">
                                            Policy privacy
                                        </a>{" "}
                                        and{" "}
                                        <a className="underline hover:text-gray-900" href="#">
                                            Terms of Use
                                        </a>
                                    </p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="hidden lg:block relative w-full lg:w-1/2">
                    {/* Video Section */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={safezones} />
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center" style={{ zIndex: 10 }}>
                        <div className="overflow-hidden">
                            <div
                                style={{ transform: `translateX(-${(activeSlide - 1) * 100.5}%)` }}
                                className="whitespace-nowrap transition-transform duration-500 ease-in-out"
                            >
                                {slides.map((slide, index) => (
                                    <div key={index} className="inline-block w-full whitespace-normal">
                                        <img className="lg:max-w-xl mx-auto" src={slide.img} alt="" />
                                        <h2 className="mb-2 text-2xl text-white font-bold">{slide.title}</h2>
                                        <div className="max-w-lg mx-auto">
                                            <p className="mb-6 text-gray-50 leading-loose">{slide.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action Button */}
                        <a className="inline-block py-2 px-6 leading-loose rounded-t-xl rounded-l-xl bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400 hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold" href="#">
                            Get Started
                        </a>

                        {/* Pagination Dots */}
                        <div className="mt-12 flex justify-center space-x-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`p-1 rounded-full ${activeSlide === index + 1 ? 'bg-white' : 'bg-green-500'}`}
                                    onClick={() => setActiveSlide(index + 1)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:hidden bg-black w-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-[850px] object-cover"
                    >
                        <source src={safezones} type="video/mp4" />
                        {/* Optional fallback for browsers that don't support the video */}
                        Your browser does not support the video tag.
                    </video>
                    <div className="relative w-full">

                        <div className="flex justify-center space-x-3">
                            <button className="p-1 bg-green-500 rounded-full"></button>
                            <button className="p-1 bg-green-500 rounded-full"></button>
                            <button className="p-1 bg-white rounded-full"></button>
                            <button className="p-1 bg-green-500 rounded-full"></button>
                        </div>
                    </div>
                    <div className="py-10 px-3 text-center" style={{ zIndex: 10 }}>
                        <h2 className="mb-2 text-2xl text-white font-bold">So much more than a business analytics tool</h2>
                        <p className="mb-6 text-gray-50 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                        <a className="py-2 px-6 rounded-t-xl rounded-l-xl bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 hover:bg-gray-500 text-gray-900 hover:text-gray-400 transition duration-200 font-bold" href="#">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupSection;
