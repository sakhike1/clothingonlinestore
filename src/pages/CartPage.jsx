import React from 'react';

const CartPage = () => {
    return (
        <div>
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                    <h2 className="title font-manrope font-bold text-4xl p-10 leading-10 mb-8 text-center text-black">
                        Shopping Cart
                    </h2>
                    <div className="rounded-3xl border-2 border-gray-200 bg-gradient-to-r from-slate-500 to-yellow-100 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
                        <div className="col-span-12 lg:col-span-2 img box">
                            <img src="https://pagedone.io/asset/uploads/1701162826.png" alt="speaker image" className="max-lg:w-full lg:w-[180px] rounded-lg object-cover" />
                        </div>
                        <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                            <div className="flex items-center justify-between w-full mb-4">
                                <h5 className="font-manrope font-bold text-m leading-9 text-gray-900">Round white portable speaker</h5>
                                <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500">
                                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400" cx="17" cy="17" r="17" fill="" />
                                        <path className="stroke-red-500 transition-all duration-500 group-hover:stroke-white" d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className="font-normal text-xs leading-7 text-gray-900 mb-6">
                                Introducing our sleek round white portable speaker, the epitome of style and sound! Elevate your auditory experience with this compact yet powerful device that delivers crystal-clear audio wherever you go.

                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <button className="group rounded-[100px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 9.5H13.5" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <input type="text" id="number" className="border border-gray-200 rounded-full w-8 aspect-square outline-none text-black  text-sm py-1.5 px-3 bg-gray-100 text-center" placeholder="2" />
                                    <button className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                        <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black" width="15" height="15" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.75 9.5H14.25M9 14.75V4.25" stroke="" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">R199</h6>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
                    <div className="flex justify-between">
                        <h3 className="text-3xl font-bold text-gray-800">Total</h3>
                        <h4 className="text-2xl font-bold text-indigo-600">R199</h4>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartPage;
