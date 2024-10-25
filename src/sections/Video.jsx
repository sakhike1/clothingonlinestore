import React, { useState } from "react";
import { bate, clips } from "../assets/images";
import { Link } from "react-router-dom";

const media = [
    {
        src: bate,
        alt: "Bate Video",
        label: "Skipmana",
        isVideo: true,
    },
    {
        src: clips,
        alt: "Clips Video",
        label: "Skipaman",
        isVideo: true,
    },
];

export default function Index() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to get the next index without allowing consecutive media
    const getNextIndex = (direction) => {
        let newIndex = currentIndex;
        let nextItem;

        // Loop until the new item is not the same as the current one
        do {
            newIndex = (direction === "next")
                ? (newIndex + 1) % media.length
                : (newIndex === 0 ? media.length - 1 : newIndex - 1);
            nextItem = media[newIndex];
        } while (nextItem.src === media[currentIndex].src);

        return newIndex;
    };

    const handlePrevClick = () => {
        setCurrentIndex(getNextIndex("prev"));
    };

    const handleNextClick = () => {
        setCurrentIndex(getNextIndex("next"));
    };

    return (

        <section id="hero" className="w-full -mt-[50px]">

            <div data-aos="fade-up"
                data-aos-duration="3000" className="max-w-[1350px] rounded-lg   mx-auto p-4">
                <div className="2xl:container flex justify-center items-center -mt-[370px] w-full 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
                    <div className="w-80 md:w-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
                        {/* Previous Arrow */}
                        <button
                            onClick={handlePrevClick}
                            className="absolute left-10 text-white bg-gray-800 p-2 hover:bg-gray-600"
                        >
                            &larr;
                        </button>

                        {/* Video 1 */}
                        <div className="relative group" data-aos="fade-up"
                            data-aos-duration="3000">
                            <video
                                className="lg:block hidden w-full"
                                src={media[currentIndex].src}
                                autoPlay
                                loop
                                muted
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
                                <p className="font-semibold text-2xl leading-6 text-white">
                                    {media[currentIndex].label}
                                </p>
                            </div>
                        </div>

                        {/* Center Section */}
                        <div className="lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center bg-gradient-to-b from-indigo-700 to-yellow-500">
                            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9 text-gray-100 lg:w-full md:w-7/12 w-full">
                                Shop your Favourite Designers
                            </h2>
                            <p className="font-medium text-xs leading-6 text-gray-300 mt-4 lg:w-full md:w-7/12 w-full">
                                We offer a huge collection of premium clothing that is crafted with excellence for our adored customers.
                            </p>
                            <Link to="/Product" className="focus:outline-none hover:shadow-2xl  hover:bg-gray-700 text-white text-base leading-4 bg-gray-800 lg:px-10 py-4 lg:w-auto w-72 mt-16">
                                Discover More
                            </Link>
                        </div>

                        {/* Video 2 */}
                        <div className="relative group" data-aos="fade-up"
                            data-aos-duration="3000">
                            <video
                                className="lg:block hidden w-full"
                                src={media[(currentIndex + 1) % media.length].src}
                                autoPlay
                                loop
                                muted
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
                                <p className="font-semibold text-2xl leading-6 text-white">
                                    {media[(currentIndex + 1) % media.length].label}
                                </p>
                            </div>
                        </div>

                        {/* Next Arrow */}
                        <button
                            onClick={handleNextClick}
                            className="absolute right-10 text-white bg-gray-800 p-2 hover:bg-gray-600"
                        >
                            &rarr;
                        </button>
                    </div>
                </div>

            </div>
        </section>

    );
}

