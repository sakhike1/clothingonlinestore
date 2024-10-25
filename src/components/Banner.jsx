import React, { useState, useEffect } from 'react';
import { fire } from "../assets/images";
import { Link } from 'react-router-dom';

const Banner = () => {
    // Array of words to display
    const words = [
        'Yo! The latest drip just dropped, and it’s fire! 🔥',
        'Stay ahead of the game, check out our new exclusive fits!',
        'Level up your streetwear game, no cap – you don’t wanna miss this!',
        'Get fresh, stay fly – we got the heat you’ve been looking for!'
    ];

    // State to track the current word index
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // Update word every 10 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
        }, 10000); // 10 seconds

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900">
            <div className="max-w-screen-xl mx-auto h-12 px-4 py-3 items-center gap-x-4 justify-center text-gray-100 sm:flex md:px-8">
                {/* Display the current word */}
                <p className="py-2 font-medium">
                    {words[currentWordIndex]}
                </p>
                <Link to="/Product" className="relative  rounded-full hover:shadow-2xl overflow-hidden p-2 w-full sm:w-[150px] flex items-center justify-center">
                    <video className="absolute inset-0 w-full h-full object-cover rounded-full hover:opacity-80 transition-opacity duration-300" autoPlay loop muted>
                        <source src={fire} type="video/mp4" />
                    </video>
                    <span className="relative z-10 text-white text-xs sm:text-sm">Cav Now</span>
                </Link>

            </div>
        </div>
    );
};

export default Banner;
