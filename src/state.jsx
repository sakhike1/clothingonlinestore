import React, { useState } from "react";
import Nav from "./Nav"; // Adjust the import path accordingly
import PopularProducts from "./PopularProducts"; // Adjust the import path accordingly

const state = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = (product) => {
        setCartCount((prevCount) => prevCount + 1);
        // You can also add logic here to update the cart with the product details if needed
        console.log("Added to cart:", product);
    };

    return (
        <div>
            <Nav cartCount={cartCount} />
            <PopularProducts onAddToCart={handleAddToCart} />
            {/* Other components can go here */}
        </div>
    );
};

export default state;
