import {createContext, SetStateAction, useEffect, useState} from "react";

export const CartContext = createContext(null);


export const CartProvider = ({children}) => {
    let [cart, setCart] = useState([])
    const addItem = (item: SetStateAction<never[]>) => {
        setCart((prevState) => [...prevState, item])
    }

    const discardItem = (removeItem) => {
        const updatedCart = cart.filter((item) => (
            item.id !== removeItem.id || item.size !== removeItem.size
        ));
        setCart(updatedCart);
    }


    return <CartContext.Provider value={{cart, setCart, addItem, discardItem}}>{children}</CartContext.Provider>

}