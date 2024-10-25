import { useState, useEffect } from "react";
import { arrowRight } from "../assets/icons";
import { offer, offer2 } from "../assets/images"; // Import the second image
import Button from "../components/Button.jsx";

const SpecialOffer = () => {
    // State to hold the current image
    const [currentImage, setCurrentImage] = useState(offer);

    useEffect(() => {
        // Function to alternate images
        const switchImage = () => {
            setCurrentImage((prevImage) => (prevImage === offer ? offer2 : offer));
        };

        // Set interval to change the image every 4 seconds
        const intervalId = setInterval(switchImage, 4000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
            <div className='flex-1'>
                <img
                    src={currentImage}
                    alt='Shoe Promotion'
                    width={773}
                    height={687}
                    className='object-contain w-full'
                />
            </div>
            <div className='flex flex-1 flex-col'>
                <h2 className='text-4xl font-palanquin font-bold'>
                    <span className='text-gray-400'>Special </span>
                    Offer
                </h2>
                <p className='mt-4 info-text'>
                    Embark on a shopping journey that redefines your experience with
                    unbeatable deals. From premier selections to incredible savings, we
                    offer unparalleled value that sets us apart.
                </p>
                <p className='mt-6 info-text'>
                    Navigate a realm of possibilities designed to fulfill your unique
                    desires, surpassing the loftiest expectations. Your journey with us is
                    nothing short of exceptional.
                </p>
                <div className='mt-11 flex flex-wrap gap-4'>
                    <Button label='Shop now' iconURL={arrowRight} />
                    <Button
                        label='Learn more'
                        backgroundColor='bg-white'
                        borderColor='border-slate-gray'
                        textColor='text-slate-gray'
                    />
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
