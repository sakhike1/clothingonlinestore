import React, { useState, useEffect } from 'react';

const Loved = () => {
    const [lovedProducts, setLovedProducts] = useState([]);

    // Load loved products from localStorage on component mount
    useEffect(() => {
        const savedLovedProducts = JSON.parse(localStorage.getItem('lovedProducts')) || [];
        setLovedProducts(savedLovedProducts);
    }, []);

    // Remove product from loved list
    const handleRemoveLovedProduct = (productId) => {
        const updatedLovedProducts = lovedProducts.filter(product => product.id !== productId);
        setLovedProducts(updatedLovedProducts);
        localStorage.setItem('lovedProducts', JSON.stringify(updatedLovedProducts));
    };

    return (
        <section id="loved-products" className="w-full py-10">
            <h2 className="text-2xl font-bold text-center mb-6">Loved Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto p-4">
                {lovedProducts.length > 0 ? (
                    lovedProducts.map((product) => (
                        <div key={product.id} className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-lg">
                            <img src={product.imgURL} alt={product.name} className="w-full h-auto object-cover rounded-md mb-2" />
                            <h3 className="text-lg text-gray-600 mb-2">{product.name}</h3>
                            <p className="text-gray-400 mb-4">{product.price}</p>
                            <button
                                onClick={() => handleRemoveLovedProduct(product.id)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg"
                            >
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No loved products yet.</p>
                )}
            </div>
        </section>
    );
};

export default Loved;
