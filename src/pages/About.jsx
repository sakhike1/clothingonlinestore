import React from 'react';
import { us, usvi } from "../assets/images";
import AOS from 'aos';

const About = () => {
    AOS.init();
    return (
        <div>
            <section className="ezy__about6 py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white" data-aos="fade-up" data-aos-duration="3000" s>
                <div className="container px-4">
                    {/* Skipaman Story Section */}
                    <div className="grid grid-cols-12 justify-center items-center mt-12">
                        <div className="col-span-12 md:col-span-5 md:col-start-2 order-2 md:order-1">
                            <div className="flex flex-col justify-center lg:pr-14">
                                {/* Updated Header */}
                                <h4 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Our Story and Vision
                                </h4>
                                <p className="text-lg leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
                                    Skipaman was born out of a vision to create a brand that truly resonates with the people of South Africa.
                                    Founded by Sakhile, Skipaman draws inspiration from the vibrant urban culture of South Africa, celebrating
                                    the diversity, resilience, and creativity of its people. With a focus on authenticity and connection,
                                    Skipaman aims to offer fashion that speaks to the unique style and spirit of South Africans.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 md:col-start-7 order-1 md:order-2 mb-6 md:mb-0 mt-6 md:mt-0">
                            <div>
                                <video
                                    className="w-full max-h-[400px] rounded-md object-cover"
                                    src={us}
                                    autoPlay
                                    loop
                                    muted
                                    alt="Bate Video"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Sakhile's Journey Section */}
                    <div className="grid grid-cols-12 justify-center items-center mt-12">
                        <div className="col-span-12 md:col-span-5 md:col-start-7 order-2">
                            <div className="flex flex-col justify-center lg:pl-14">
                                {/* Updated Header */}
                                <h4 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                    Sakhile's Journey
                                </h4>
                                <p className="text-lg leading-relaxed text-justify opacity-70 mb-0">
                                    Sakhile's journey began with a simple yet powerful idea: to build a brand that embodies the urban culture
                                    of South Africa. With passion, dedication, and a deep connection to the people, Skipaman was crafted to
                                    inspire and be inspired by South Africans. From the streets to the fashion scene, the brand reflects the
                                    dynamic and evolving culture of the nation, delivering style and substance for everyone.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5 md:col-start-2 order-1 mb-6 md:mb-0 mt-6 md:mt-0">
                            <div>
                                <video
                                    className="w-full max-h-[400px] rounded-md object-cover"
                                    src={usvi}
                                    autoPlay
                                    loop
                                    muted
                                    alt="Bate Video"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
