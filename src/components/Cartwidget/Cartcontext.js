import React from 'react'
import {useState, useContext} from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    //Borrar todo el carrito
    const clearCart = () => setCart([]);
        //Item en carrito
        const inCart = (id) => cart.find (product => product.id === id) ? true : false;
            //Remover item carrito
            const remItem = (id) => setCart(cart.filter(product => product.id !== id));
                //Agregar Item
                    const addItem = (item, quantity) => {
                        let newCart;
                        let product = cart.find(product => product.id === item.id);
                        if (product) {
                            product.quantity += quantity;
                            newCart =[...cart];
                        } else {
                                product = {...item, quantity: quantity};
                                newCart = [...cart, product];
                        }
                        setCart(newCart)
                    }
              

console.log('Carrito: ', cart);

    return (
            <CartContext.Provider value={{
                clearCart,
                inCart,
                remItem,
                addItem
            }}>
                {children}
            </CartContext.Provider>
  )
}

export default CartProvider;