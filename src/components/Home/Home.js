import React from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <div className="grid place-items-center">
                <h1 className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
                    Shopping Cart
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <Products />
                <Cart />
            </div>
        </>
    );
};

export default Home;