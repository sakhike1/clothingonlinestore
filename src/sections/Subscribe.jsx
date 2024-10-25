import { useState } from "react";
import Button from "../components/Button.jsx";
import AOS from 'aos';

const Subscribe = () => {
    AOS.init();
    const [email, setEmail] = useState(""); // State for the email input
    const [errorMessage, setErrorMessage] = useState(""); // State for error messages

    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Update the email state
        setErrorMessage(""); // Clear any previous error message on change
    };

    const handleSubscribe = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailPattern.test(email)) {
            alert(`Thank you for subscribing! You entered: ${email}`); // Show success message
            setEmail(""); // Clear the email input
            setErrorMessage(""); // Clear any previous error message
        } else {
            setErrorMessage("Please enter a valid email address."); // Set error message
        }
    };

    return (
        <div data-aos="fade-up"
            data-aos-duration="3000" className="mx-auto mt-10 max-w-7xl  px-6 lg:px-8"> {/* Reduced top margin */}
            <div className="relative isolate  overflow-hidden px-6 py-24 bg-gradient-to-r from-gray-100 to-gray-300 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32">
                <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
                    Keep Updated
                </h2>

                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-black">
                    Keep pace with SecureCloud advancements! Join our mailing list for selective, noteworthy updates.
                </p>

                <form className="mx-auto mt-10 flex max-w-md gap-x-4" onSubmit={handleSubscribe}>
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto hover:scale-105 active:scale-95 rounded-full border border-gray-600 bg-white/5 px-4 py-2 text-black shadow-sm focus:outline-none focus:ring-0 focus:border-gray-600 sm:text-sm sm:leading-6 w-full text-center" // Removed bold border on focus
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange} // Update email state on change
                    />
                    <Button
                        label="Notify me"
                        type="submit"
                        fullWidth
                        className="transform transition-transform duration-200 hover:scale-105 active:scale-95"
                    />

                </form>

                {errorMessage && ( // Display error message if it exists
                    <p className="text-red-500 mt-2 text-center">{errorMessage}</p>
                )}

                <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                    aria-hidden="true">
                    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7">
                    </circle>
                    <defs>
                        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                            gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                            <stop stopColor="#7775D6"></stop>
                            <stop offset="1" stopColor="#7ED321" stopOpacity="0"></stop>
                        </radialGradient>
                    </defs>
                </svg>

            </div>

        </div>

    );
};

export default Subscribe;
