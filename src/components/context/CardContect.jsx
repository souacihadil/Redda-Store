import React, { createContext, useEffect, useState } from 'react';

export const CardContext = createContext();

export default function CardProvider({ children }) {
    const [cartItems, setCartItems] = useState(()=> {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : []
    });

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };
    useEffect(()=>{
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])
    return (
        <CardContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CardContext.Provider>
    );
}



