import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { star } from "../assets/icons";
import { products } from "../constants";
import { Otheritems } from '../sections';
import Pagination from "../components/Pagination";
import AOS from 'aos';
import heart from '../assets/images/heart.png';
import redheart from '../assets/images/redheart.png';

const PopularProducts = ({ onAddToCart }) => {
    AOS.init();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const navigate = useNavigate();

    const [lovedProducts, setLovedProducts] = useState(
        products.map(product => ({ ...product, isLoved: false }))
    );

    const [heartAnimation, setHeartAnimation] = useState({});

    // Load loved products from localStorage on initial render
    useEffect(() => {
        const savedLovedProducts = JSON.parse(localStorage.getItem('lovedProducts'));
        if (savedLovedProducts) {
            setLovedProducts(savedLovedProducts);
        }
    }, []);

    // Save lovedProducts to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('lovedProducts', JSON.stringify(lovedProducts));
    }, [lovedProducts]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Handle double-click to toggle loved status
    const handleHeartDoubleClick = (productId) => {
        setLovedProducts(prevLovedProducts =>
            prevLovedProducts.map(product =>
                product.id === productId
                    ? { ...product, isLoved: !product.isLoved }  // Toggle only the clicked product
                    : product  // Keep the status of other products unchanged
            )
        );

        // Trigger animation
        setHeartAnimation(prev => ({ ...prev, [productId]: true }));

        // Remove animation class after it finishes
        setTimeout(() => {
            setHeartAnimation(prev => ({ ...prev, [productId]: false }));
        }, 500); // Match this duration with the CSS animation duration
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = lovedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleViewItemClick = (product) => {
        navigate(`/item-details`, { state: { product } });
    };

    const handleLovedPageClick = () => {
        navigate('/loved-products');
    };

    return (
        <>
            <section id="popular-products" className="w-full py-[150px] mt-[-50px]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto p-4" data-aos="fade-up" data-aos-duration="3000">
                    {currentProducts.map((product) => (
                        <div key={product.id} className="flex flex-col hover:shadow-xl items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 p-6 rounded-lg shadow-lg">
                            <button
                                className="relative ml-20 mr-60 px-4 py-2 rounded-lg focus:outline-none"
                                onDoubleClick={() => handleHeartDoubleClick(product.id)}
                            >
                                <img
                                    src={product.isLoved ? redheart : heart}
                                    className={`h-5 w-5 mr-20 transition-transform duration-300 ease-in-out transform ${product.isLoved ? "hover:scale-125" : ""} ${heartAnimation[product.id] ? "heart-animation" : ""}`}
                                    alt="heart icon"
                                />
                            </button>

                            <img src={product.imgURL} alt={product.name} className="w-full h-auto object-cover rounded-md mb-2" />
                            <hr className="border-t border-gray-300 my-4 w-full" />
                            <div className="mt-4 flex justify-center items-center gap-2">
                                <img src={star} alt="rating icon" className="w-5 h-5" />
                                <p className="font-montserrat text-lg text-gray-700">{product.review}</p>
                            </div>
                            <h3 className="text-lg text-gray-600 mb-2">{product.name}</h3>
                            <p className="text-gray-400 mb-4">{product.text}</p>
                            <p className="text-gray-700 text-base mb-4">{product.price}</p>

                            <div className="flex justify-center items-center w-full">
                                <button
                                    className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden rounded-full group"
                                    onClick={() => handleViewItemClick(product)}
                                >
                                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-gray-500 opacity-[3%]"></span>
                                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 opacity-100 group-hover:-translate-x-8"></span>
                                    <span className="relative text-xs w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-gray-600">
                                        VIEW ITEMS
                                    </span>
                                    <span className="absolute inset-0 border-[#81858b86] border rounded-full"></span>
                                </button>
                            </div>
                        </div>
                    ))}
                    <Pagination
                        productsPerPage={productsPerPage}
                        totalProducts={lovedProducts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />

                </div>
                <div className="ml-10"><Otheritems /></div>

            </section>
        </>
    );
};

export default PopularProducts;
