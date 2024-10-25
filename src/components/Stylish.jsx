import React, { useState } from 'react';
import { safezones } from "../assets/images";
import { Link } from 'react-router-dom';

const HeaderSection = () => {
    const [showContent, setShowContent] = useState(false);

    return (
        <div class="font-sans mt-[50px] ">
            <div class="grid lg:grid-cols-2 rounded-md items-center lg:gap-y-6  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500k">
                <div class="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
                    <h2 class="text-gray-900 lg:text-5xl text-3xl font-bold lg:!leading-[30px]">Elevate Your Experience with Modern Elegance</h2>
                    <p class="text-gray-900 mt-6 text-xs leading-relaxed">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
                    <Link to={"/Product"}>
                        <button type='button'
                            class="bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 hover:shadow-2xl  mt-12 transition-all text-gray-700 font-bold text-sm rounded-full px-6 py-2.5">Get Started</button>
                    </Link>
                </div>

                <div class="lg:h-[480px] flex items-center">


                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={safezones} />

                    </video>
                </div>
            </div>



        </div>
    );
};

export default HeaderSection;
