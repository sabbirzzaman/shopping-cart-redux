import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    decreaseQuantity,
    increaseQuantity,
} from '../../redux/addToCart/actions';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    // get state values
    const cartItem = useSelector((state) => state.addToCart);

    // get dispatch function
    const dispatch = useDispatch();

    // quantity increase dispatch
    const quantityIncrease = (name, quantity) => {
        dispatch(increaseQuantity(name, quantity));
    };

    // quantity decrease dispatch
    const quantityDecrease = (name, quantity) => {
        dispatch(decreaseQuantity(name, quantity));
    };

    // total items
    const totalItems = cartItem.reduce(
        (prevValue, currentValue) => prevValue + currentValue.quantity,
        0
    );

    // quantity prices
    const pricePerQuantity = cartItem.map((item) => item.price * item.quantity);

    const totalPrice = pricePerQuantity.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        0
    );

    return (
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
                {cartItem.map((item, index) =>
                    item.quantity ? (
                        <CartItem
                            key={index}
                            name={item.name}
                            quantity={item.quantity}
                            quantityIncrease={quantityIncrease}
                            quantityDecrease={quantityDecrease}
                        />
                    ) : (
                        <span key={index}></span>
                    )
                )}

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
