
import Button from "../components/Button.jsx";
import { tShirtImage, arrowRight } from "../assets/images";
import { Link } from "react-router-dom";
import {

    Delivery

} from "../sections";

import AOS from 'aos';

const Hero = () => {
    AOS.init();

    return (

        <section id="hero" className="w-full py-[150px]">
            < Delivery />

            <div data-aos="fade-up"
                data-aos-duration="3000" className="grid grid-cols-2  gap-4 font-mono text-white text-sm text-center font-bold leading-6 bg-stripes-indigo rounded-lg max-w-6xl mx-auto p-4">
                {" "}
                {/* Reduced padding */}
                {/* Image Items */}
                <div className="p-2 rounded-lg hover:shadow-xl shadow-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 h-48">
                    {" "}
                    {/* Set fixed height */}
                    <img src={tShirtImage} alt="Big Shoe" className="w-full h-full object-contain rounded-lg" />
                </div>
                <div className="p-2 rounded-lg hover:shadow-xl shadow-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 h-48">
                    {" "}
                    {/* Set fixed height */}
                    <img src={tShirtImage} alt="T-Shirt" className="w-full h-full object-contain rounded-lg" />
                </div>
                {/* Placeholder for additional images or content */}
                <div className="p-2 rounded-lg hover:shadow-xl shadow-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 h-48">
                    {" "}
                    {/* Set fixed height */}
                    <img src={tShirtImage} alt="Shoe 1" className="w-full h-full object-contain rounded-lg" />
                    <div className="mt-10">
                        <Link to="/Product">
                            <Button label="Shop Now" iconURL={arrowRight} />
                        </Link>
                    </div>
                </div>
                <div className="p-2 hover:shadow-xl rounded-lg shadow-lg bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 h-48">
                    {" "}
                    {/* Set fixed height */}
                    <img src={tShirtImage} alt="Shoe 2" className="w-full h-full object-contain rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
