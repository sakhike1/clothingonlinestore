import React, { useState } from 'react';
import { tshirtback, fire } from "../assets/images";
import { Link } from 'react-router-dom';
import Stylish from '../components/Stylish'

const ProductSection = () => {
    const products = [
        { id: 1, img: tshirtback, label: 'New hottest', discount: '30% OFF' },
        { id: 2, img: tshirtback, label: 'New hottest', discount: '30% OFF' },
        { id: 3, img: tshirtback, label: 'New hottest', discount: '30% OFF' },
        { id: 4, img: tshirtback, label: 'New hottest', discount: '30% OFF' },
        { id: 5, img: tshirtback, label: 'New hottest', discount: '30% OFF' },
        { id: 6, img: tshirtback, label: 'New hottest', discount: '30% OFF' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const next = () => {
        if (currentIndex < products.length - itemsPerPage) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <section className="pt-6 pb-24 px-6 ml-[200px] mt-[100px] w-[1200px]">
            <h2 className="font-heading uppercase text-4xl mb-6 text-left">Other people viewed new arrival</h2>
            <div className="flex justify-center flex-wrap -m-4">
                {products.slice(currentIndex, currentIndex + itemsPerPage).map(product => (
                    <div key={product.id} className="w-full lg:w-1/3 p-4">
                        <div className="group">
                            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 rounded-xl mb-6" style={{ height: "400px" }}>
                                <a href="#">
                                    <img className="rounded-xl object-contain w-full h-full transform group-hover:scale-105 transition duration-200" src={product.img} alt="" />
                                </a>
                                <div className="absolute top-4 left-4 right-4">
                                    <div className="flex justify-between flex-wrap gap-4">
                                        <div className="flex flex-wrap gap-2">
                                            <Link to="/contact" className="relative rounded-full hover:shadow-2xl overflow-hidden p-2 w-full sm:w-[150px] flex items-center justify-center">
                                                <video className="absolute inset-0 w-full h-full object-cover rounded-full hover:opacity-80 transition-opacity duration-300" autoPlay loop muted>
                                                    <source src={fire} type="video/mp4" />
                                                </video>
                                                <span className="relative z-10 text-white text-xs sm:text-sm">{product.label}</span>
                                            </Link>
                                            <span className="inline-block bg-black rounded-full px-3 py-2 font-semibold text-white">{product.discount}</span>
                                        </div>
                                        <a href="#" className="bg-black border border-gray-200 rounded-full hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 text-sm font-semibold w-10 h-10 flex items-center justify-center transition duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20.1603 5.00004C19.1002 3.93725 17.6951 3.28858 16.1986 3.17121C14.7021 3.05384 13.213 3.47551 12.0003 4.36004C10.7279 3.41368 9.14427 2.98455 7.5682 3.15908C5.99212 3.33361 4.54072 4.09882 3.50625 5.30063C2.47178 6.50244 1.9311 8.05156 1.99308 9.63606C2.05506 11.2206 2.71509 12.7227 3.84028 13.84L10.0503 20.06C10.5703 20.5718 11.2707 20.8587 12.0003 20.8587C12.7299 20.8587 13.4303 20.5718 13.9503 20.06L20.1603 13.84C21.3279 12.6653 21.9832 11.0763 21.9832 9.42004C21.9832 7.76377 21.3279 6.17478 20.1603 5.00004ZM18.7503 12.46L12.5403 18.67C12.4696 18.7414 12.3855 18.798 12.2928 18.8367C12.2001 18.8753 12.1007 18.8953 12.0003 18.8953C11.8999 18.8953 11.8004 18.8753 11.7077 18.8367C11.615 18.798 11.5309 18.7414 11.4603 18.67L5.25028 12.43C4.46603 11.6284 4.02689 10.5515 4.02689 9.43004C4.02689 8.30858 4.46603 7.2317 5.25028 6.43004C6.04943 5.64103 7.12725 5.19861 8.25028 5.19861C9.3733 5.19861 10.4511 5.64103 11.2503 6.43004C11.3432 6.52377 11.4538 6.59817 11.5757 6.64893C11.6976 6.6997 11.8283 6.72584 11.9603 6.72584C12.0923 6.72584 12.223 6.6997 12.3449 6.64893C12.4667 6.59817 12.5773 6.52377 12.6703 6.43004C13.4694 5.64103 14.5472 5.19861 15.6703 5.19861C16.7933 5.19861 17.8711 5.64103 18.6703 6.43004C19.4653 7.22119 19.9189 8.29223 19.9338 9.41373C19.9488 10.5352 19.5239 11.618 18.7503 12.43V12.46Z" fill="#D62323"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex justify-between mt-4">
                <button onClick={prev} disabled={currentIndex === 0} className="bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button onClick={next} disabled={currentIndex >= products.length - itemsPerPage} className="bg-black text-white px-4 py-2 rounded-lg disabled:opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            <Stylish />
        </section>
    );
};

export default ProductSection;
