import React from 'react';
import { FaShippingFast, FaMoneyBillWave, FaUndo } from 'react-icons/fa'; // Adjusted icons import
import { sale, award } from "../assets/images";

const Delivery = () => {
    return (
        <section id="hero" className="w-full -mt-[100px]">
            <div className="max-w-[1200px] rounded-lg mx-auto p-4">
                <div className="xl:mx-auto xl:container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-4">
                        {/* Delivery */}
                        <div className="w-full h-24 flex items-center justify-center hover:shadow-2xl bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 rounded-xl">
                            <FaShippingFast className="text-black text-3xl mr-2" />
                            <span className="text-black text-xs font-semibold">Free Delivery and collect on order more <br /> than R500*</span>
                        </div>

                        {/* Money Back */}
                        <div className="w-full h-24 flex items-center justify-center hover:shadow-2xl bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 rounded-xl">
                            <img src={sale} className='h-9 w-9 mr-2' alt="" />
                            <span className="text-black text-xs font-semibold">Get a free t-shirt when  you buy <br /> two t-shirts </span>
                        </div>

                        {/* Returns */}
                        <div className="w-full h-24 flex items-center justify-center hover:shadow-2xl bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 rounded-xl">
                            <img src={award} className='h-9 w-9 mr-2' alt="" />
                            <span className="text-black text-xs font-semibold">Stand a chance to win a cologne when you spend <br />  R1000*</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Delivery;
