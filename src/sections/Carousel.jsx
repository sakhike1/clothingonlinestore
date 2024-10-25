import React from "react";
import { tShirtImage, fire } from "../assets/images"; // Adjust imports as needed
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Feature10 = () => {
    AOS.init();
    return (
        <section id="hero" className="w-full -mt-[370px]"
            data-aos="fade-up"
            data-aos-duration="3000">

            <div className="max-w-[1330px]   mx-auto p-4">
                <div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
                    <h1 className="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800">Skipaman ModaFresco</h1>
                    <p className="md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600">hotest in the street, feel the vibes, we bring, it rings like phones in call centers </p>
                    <div className="md:flex items-start justify-between mt-12">
                        <div className="md:w-1/2 lg:w-full">
                            <div>
                                <div className="relative hover:shadow-2xl rounded-lg  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
                                    <img className="ml-5" src={tShirtImage} alt="stairs" />
                                    <video className="absolute h-[80px] inset-0  w-[90px] object-fill" autoPlay loop muted>
                                        <source src={fire} type="video/mp4" />

                                    </video>
                                </div>

                                <h1 className="text-2xl mt-5 font-semibold leading-7 sm:pr-20  text-gray-800">Moving up the corporate ladder?</h1>
                                <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                <Link to="/Product">
                                    <button className="flex items-center  hover:shadow-2xl justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 ">

                                        <p className="text-base font-medium leading-4 text-white">Read more</p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33203 8H12.6654" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 5.33344L12.6667 8.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-9">
                                <div className="relative hover:shadow-2xl rounded-lg  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
                                    <img className="ml-5" src={tShirtImage} alt="stairs" />
                                    <video className="absolute h-[80px] inset-0  w-[90px] object-fill" autoPlay loop muted>
                                        <source src={fire} type="video/mp4" />

                                    </video>
                                </div>

                                <h1 className="text-2xl mt-5 font-semibold leading-7 sm:pr-20  text-gray-800">Expert advice on wood works</h1>
                                <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                <Link to="/Product">
                                    <button className="flex items-center  hover:shadow-2xl justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 ">

                                        <p className="text-base font-medium leading-4 text-white">Read more</p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33203 8H12.6654" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 5.33344L12.6667 8.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
                            <div>
                                <div className="relative hover:shadow-2xl rounded-lg  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
                                    <img className="ml-5" src={tShirtImage} alt="stairs" />
                                    <video className="absolute h-[80px] inset-0  w-[90px] object-fill" autoPlay loop muted>
                                        <source src={fire} type="video/mp4" />

                                    </video>
                                </div>

                                <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-5 text-gray-800">How a serene environment affects productivity</h1>
                                <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                <Link to="/Product">
                                    <button className="flex items-center  hover:shadow-2xl justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 ">

                                        <p className="text-base font-medium leading-4 text-white">Read more</p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33203 8H12.6654" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 5.33344L12.6667 8.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-10">
                                <div className="relative hover:shadow-2xl rounded-lg  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
                                    <img className="ml-5" src={tShirtImage} alt="stairs" />
                                    <video className="absolute h-[80px] inset-0  w-[90px] object-fill" autoPlay loop muted>
                                        <source src={fire} type="video/mp4" />

                                    </video>
                                </div>

                                <h1 className="text-2xl mt-5 font-semibold leading-7 sm:pr-20  text-gray-800">How to grow as a team through a balance of collaboration and individualism</h1>
                                <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
                                <Link to="/Product">
                                    <button className="flex items-center  hover:shadow-2xl justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 ">

                                        <p className="text-base font-medium leading-4 text-white">Read more</p>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33203 8H12.6654" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 10.6667L12.6667 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 5.33344L12.6667 8.0001" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature10;




