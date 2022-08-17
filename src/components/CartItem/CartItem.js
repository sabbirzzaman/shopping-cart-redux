import React from 'react';
import MinusIcon from '../Shared/MinusIcon';
import PlusIcon from '../Shared/PlusIcon';
import { useSelector } from 'react-redux';

const CartItem = ({name, quantity, quantityIncrease,quantityDecrease}) => {
    const products = useSelector((state) => state.products);

    const productItem = products.find((item) => item.name === name);

    return (
        <div className="flex justify-between border-b-2 mb-2">
            <div className="text-lg py-2">
                <p>{name}</p>
            </div>
            <div className="text-lg py-2">
                <div className="flex flex-row space-x-2 w-full items-center rounded-lg">
                    <button
                        onClick={() => quantityDecrease(name, 1)}
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                    >
                        <MinusIcon />
                    </button>
                    <p>{quantity}</p>
                    <button
                        onClick={() => quantityIncrease(name, 1)}
                        disabled={productItem.quantity > 0 ? false : true }
                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center disabled:bg-gray-400"
                    >
                        <PlusIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
