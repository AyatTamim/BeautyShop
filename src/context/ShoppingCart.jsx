import React, { useContext, useState } from 'react'
import { createContext } from "react";
import ShoppingCartProuct from '../views/ShoppingCartProuct';

const ShoppingCart = createContext({});
const ShoppingCartProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const openCart = () => {
        setIsOpen(true);
    };

    const closeCart = () => {
        setIsOpen(false);
    };
    const getItmesQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };
    const increaseCartQuantity = (id) => {
        setCartItems((currItmes) => {
            if (currItmes.find((item) => item.id === id) == null) {
                return [...currItmes, { id, quantity: 1 }];
            } else {
                return currItmes.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreaseCartQuantity = (id) => {
        setCartItems((currItmes) => {
            if (currItmes.find((item) => item.id === id) == null) {
                return currItmes.filter((item) => item.id !== id);
            } else {
                return currItmes.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeCartItem = (id) => {
        setCartItems((currItmes) => currItmes.filter((item) => item.id !== id))
    };

    return (
        <ShoppingCart.Provider
            value={{
                cartItems,
                getItmesQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeCartItem,
                openCart,
                closeCart,
            }}>
            {children}
            <ShoppingCartProuct isOpen={isOpen}/>
        </ShoppingCart.Provider>
    )
};

export default ShoppingCartProvider;

export const useShoppingCart = () => {
    return useContext(ShoppingCart);
}