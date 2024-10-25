import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { tShirtImage } from "../assets/images";
import { Starrating, Otheritems } from '../sections';
import { fire } from "../assets/images";
import { Link } from 'react-router-dom';

const Itemdetails = () => {
    const location = useLocation();
    const { product } = location.state;

    // React states to manage active slide and quantity
    const [activeSlide, setActiveSlide] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Scroll up when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // List of product images (replace these with actual image URLs or product images)
    const productImages = [
        tShirtImage,
        tShirtImage,
        tShirtImage,
        tShirtImage,
    ];

    const slideCount = productImages.length;

    const handlePrevSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide((prev) => prev - 1);
        }
    };

    const handleNextSlide = () => {
        if (activeSlide < slideCount - 1) {
            setActiveSlide((prev) => prev + 1);
        }
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4 mb-24 ">
                    {/* Left Image Slider */}
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <div className="relative mb-10" style={{ height: '564px' }}>
                            <button
                                onClick={handlePrevSlide}
                                className="absolute z-50 top-1/2 left-0 ml-8 transform -translate-y-1/2"
                            >
                                <svg
                                    width="10"
                                    height="18"
                                    viewBox="0 0 10 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
                                        fill="#1F40FF"
                                    ></path>
                                </svg>
                            </button>
                            <div className="overflow-hidden h-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 flex justify-center items-center">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(-${activeSlide * 100}%)`,
                                    }}
                                >
                                    {productImages.map((image, index) => (
                                        <div key={index} className="flex-shrink-0 w-full mx-auto">
                                            <img
                                                className="object-cover w-76 h-76 mx-auto"
                                                src={image}
                                                alt={`Slide ${index + 1}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={handleNextSlide}
                                className="absolute z-50 top-1/2 right-0 mr-8 transform -translate-y-1/2"
                            >
                                <svg
                                    width="10"
                                    height="18"
                                    viewBox="0 0 10 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
                                        fill="#1F40FF"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-wrap -mx-2 ">
                            {productImages.map((image, index) => (
                                <div key={index} className="w-1/2 sm:w-1/4 p-2">
                                    <button
                                        onClick={() => setActiveSlide(index)}
                                        className={`block border ${activeSlide === index
                                            ? 'border-black'
                                            : 'border-transparent hover:border-gray-400'
                                            }`}
                                    >
                                        <img
                                            className="w-full h-32 object-cover bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900"
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Product Details and Add to Cart */}
                    <div className="w-full md:w-1/2 px-4">
                        <div className="lg:pl-20">
                            {/* Breadcrumb, Price, and Details */}


                            {/* New Right-Side Add to Cart Section */}
                            <section className="py-12 md:py-14 bg-black  h-b-100 rounded-md" x-data="{ quantity: 1 }">
                                <div className="container mx-auto px-4">
                                    <div className="max-w-md md:max-w-none mx-auto">
                                        {/* Product Info */}
                                        <div className="pb-8 border-b border-blueGray-800">
                                            <span className="inline-block px-2 text-black text-sm mb-5 bg-yellow-400 font-medium rounded-full">Hot</span>
                                            <h4 className="font-heading text-white font-bold text-2xl text- mb-3">Basic Gray T-Shirt</h4>
                                            <p className="text-gray-100 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing a elit.</p>
                                            <div className="inline-flex items-end">
                                                <h4 className="text-2xl font-bold text-white mr-4">R200</h4>
                                                <Link to="/contact" className="relative  rounded-full hover:shadow-2xl overflow-hidden p-2 w-full sm:w-[150px] flex items-center justify-center">
                                                    <video className="absolute inset-0 w-full h-full object-cover rounded-full hover:opacity-80 transition-opacity duration-300" autoPlay loop muted>
                                                        <source src={fire} type="video/mp4" />
                                                    </video>
                                                    <span className="relative z-10 ml-10 shadow-md  text-white text-xs sm:text-sm"> 25% off</span>
                                                </Link>

                                            </div>
                                        </div>

                                        {/* Add to Cart Section */}
                                        <div className="pt-8">
                                            <div className="sm:flex mb-8">

                                                <div className="mb-5 sm:mb-0 ml-4  sm:mr-6">
                                                    <span className="block mb-3 text-white  font-bold ">Quantity</span>
                                                    <div className="inline-flex px-3 mr-5 text-black  font-bold text-secondary border-solid border-[1px] border-gray-100 ">
                                                        <input className="w-12 px-2 py-4 text-center bg-transparent outline-none placeholder-gray-900 text-gray-100"
                                                            type="number"
                                                            placeholder="1"
                                                            value={quantity}
                                                            onChange={(e) => setQuantity(e.target.value)} />
                                                        <div className="py-4  ">


                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Size Selector */}
                                                <div className="mb-5  sm:mb-0 sm:mr-6">
                                                    <span className="block mb-3 font-bold text-white">Size</span>
                                                    <select
                                                        className="form-select w-full text-white px-5 py-4 text-gray-00 font-bold outline-none bg-black border-solid border-[1px] border-gray-100  focus:ring-1 focus:ring-yellow-500 focus:ring-opacity-50"
                                                    >

                                                        <option> <span> XS</span> </option>
                                                        <option>S</option>
                                                        <option>M</option>
                                                        <option>L</option>
                                                        <option>XL</option>
                                                        <option>XXL</option>

                                                    </select>
                                                </div>

                                                {/* Color Selector */}
                                                <div className="mb-5 sm:mb-0 sm:mr-6 h-10">
                                                    <span className="block mb-3 font-bold text-white">Color</span>
                                                    <select
                                                        className="form-select  w-full px-5 py-4 text-gray-100 font-bold outline-none bg-black border-solid border-[1px] border-gray-100 focus:ring-1 focus:ring-yellow-500 focus:ring-opacity-50"
                                                    >
                                                        <option>Gray</option>
                                                        <option>Blue</option>
                                                        <option>Black</option>
                                                        <option>Green</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="m-10">
                                                <Starrating />
                                            </div>
                                            {/* Add to Cart Button */}
                                            <div>
                                                <a className="block w-full hover:shadow-2xl py-5 text-lg text-center font-bold text-black hover:text-gray-500 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 hover:bg-gray-900" href="#">
                                                    Add to Cart
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Items or other sections */}
            <Otheritems />
        </section>
    );
};

export default Itemdetails;
