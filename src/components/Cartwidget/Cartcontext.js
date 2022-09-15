import React from 'react'
import {useState, useContext} from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    //Borrar todo el carrito
    const clearCart = () => setCart([]);
        //Item en carrito
        const inCart = (id) => {
            return cart.find (product => product.id === id) ? true : false;
        } 
            //Remover item carrito
            const remProduct = (id) => setCart(cart.filter(product => product.id !== id));
                //Agregar Item
                const addProduct = (item, quantity) => {
                    if (inCart(item.id)) {
                            setCart(cart.map(product => {
                                return product.id === item.id ? {...product, quantity: product.quantity + quantity }: product
                                    }));
                    } else {
                            setCart([...cart, {...item, quantity}]);
                    }
                }

console.log('Carrito: ', cart);

    return (
            <CartContext.Provider value={(
                clearCart,
                inCart,
                remProduct,
                addProduct
            )}>
                {children}
            </CartContext.Provider>
  )
}

export default CartProvider;