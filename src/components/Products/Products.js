import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity } from '../../redux/addToCart/actions';
import RoundPlusIcon from '../Shared/RoundPlusIcon';

const Products = () => {
    const cartItem = useSelector((state) => state.addToCart);
    const productItems = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const addToCardDispatch = (name, price, quantity) => {
        const isMatched = cartItem.find((item) => item.name === name);

        if (!isMatched) {
            dispatch(addToCart(name, price, quantity));
        } else {
            dispatch(increaseQuantity(name, quantity));
        }
    };

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            {productItems.map((item) => (
                <div
                    key={item.id}
                    className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                >
                    <div className="flex justify-between px-4 items-center">
                        <div className="text-lg font-semibold">
                            <p>
                                {item.name} <span>{item.quantity > 0 ? <span>{`(${item.quantity})`}</span> : <span className='bg-red-400 text-white text-sm ml-2 py-1 rounded-md px-2'>Stock Out</span>}</span>
                            </p>
                            <p className="text-gray-400 text-base">
                                Tk{' '}
                                {item.price
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            </p>
                        </div>
                        <div className="text-lg font-semibold">
                            <button
                                onClick={() =>
                                    addToCardDispatch(item.name, item.price, 1)
                                }
                                className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center disabled:bg-gray-400"
                                disabled={item.quantity > 0 ? false : true}
                            >
                                <RoundPlusIcon />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
