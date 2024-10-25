import { Link } from 'react-router-dom';
import { tShirtImage } from "../assets/images"; // Adjust imports as needed
import AOS from 'aos';


const Feature10 = () => {
    AOS.init();
    return (
        <section id="hero" className="w-full -mt-[300px]">

            <div data-aos="fade-up"
                data-aos-duration="3000" className="max-w-[1125px] rounded-lg bg-gradient-to-r from-lime-600 via-yellow-300 to-red-600 hover:shadow-2xl mx-auto p-4">
                <div className="xl:mx-auto xl:container">
                    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                        <div className="flex flex-col-reverse lg:flex-row items-center">
                            <div className="w-full lg:w-1/2 md:py-9 py-6">
                                <img src={tShirtImage} alt="bag" className="lg:w-full h-full object-cover object-center w-full" />
                            </div>
                            <div className="lg:w-1/2 lg:pl-12  lg:pr-24">
                                <p className="text-sm leading-none text-gray-600 pb-2">Featured</p>
                                <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-100 lg:pb-6 md:pb-4 pb-2">Skipaman votex</p>
                                <p className="text-sm leading-5 text-gray-1000 md:pb-10 pb-8">Start off the new year by hitting the ground running with this purpose built workman’s bag. A culmination of productivity and luxury</p>
                                <div className="md:block flex items-center justify-center">
                                    <Link to="/Product" className="lg:w-auto w-full border hover:shadow-2xl border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-800">Shop best now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Feature10;




