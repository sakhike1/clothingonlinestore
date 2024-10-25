import { useState, useEffect } from "react";
import { shoe8, shoe9 } from "../assets/images"; // Import the second image
import Button from "../components/Button.jsx";

const SuperQuality = () => {
    // State to hold the current image
    const [currentImage, setCurrentImage] = useState(shoe8);

    useEffect(() => {
        // Function to alternate images
        const switchImage = () => {
            setCurrentImage((prevImage) => (prevImage === shoe8 ? shoe9 : shoe8));
        };

        // Set interval to change the image every 3 seconds
        const intervalId = setInterval(switchImage, 3000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section
            id='about-us'
            className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
        >
            <div className='flex flex-1 flex-col'>
                <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
                    We Provide You
                    <span className='text-gray-400'> Super </span>
                    <span className='text-gray-400'>Quality </span> Shoes
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Step into the world of urban culture with our collection of exclusive T-shirts that blend the energy of hip-hop and the rhythm of Amapiano. Designed for the trendsetters, music lovers,
                    and bold statement-makers,
                </p>
                <p className='mt-6 lg:max-w-lg info-text'>
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <div className='mt-11'>
                    <Button label='View details' />
                </div>
            </div>

            <div className='flex-1 flex justify-center items-center'>
                <img
                    src={currentImage}
                    alt='product detail'
                    width={570}
                    height={522}
                    className='object-contain'
                />
            </div>
        </section>
    );
};

export default SuperQuality;
