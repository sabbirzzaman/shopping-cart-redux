import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    decreaseQuantity,
    increaseQuantity,
} from '../../redux/addToCart/actions';
import MinusIcon from '../Shared/MinusIcon';
import PlusIcon from '../Shared/PlusIcon';

const Cart = () => {
    const cartItem = useSelector((state) => state.addToCart);
    const dispatch = useDispatch();

    const quantityIncrease = (name, quantity) => {
        dispatch(increaseQuantity(name, quantity));
    };

    const quantityDecrease = (name, quantity) => {
        dispatch(decreaseQuantity(name, quantity));
    };

    const totalItems = cartItem.reduce(
        (prevValue, currentValue) => prevValue + currentValue.quantity,
        0
    );

    const pricePerQuantity = cartItem.map((item) => item.price * item.quantity);

    const totalPrice = pricePerQuantity.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        0
    );

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                {cartItem.map((item, index) => item.quantity ? (
                    <div
                        key={index}
                        className="flex justify-between border-b-2 mb-2"
                    >
                        <div className="text-lg py-2">
                            <p>{item.name}</p>
                        </div>
                        <div className="text-lg py-2">
                            <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                                <button
                                    onClick={() =>
                                        quantityDecrease(item.name, 1)
                                    }
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                >
                                    <MinusIcon />
                                </button>
                                <p>{item.quantity}</p>
                                <button
                                    onClick={() =>
                                        quantityIncrease(item.name, 1)
                                    }
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                >
                                    <PlusIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                ) : <>
                </>)}

                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Item</p>
                        <p className="text-5xl">{totalItems.toString()}</p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                <div className="flex justify-center items-center text-center">
                    <div className="text-xl font-semibold">
                        <p>Total Price</p>
                        <p className="text-5xl">
                            {totalPrice
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
