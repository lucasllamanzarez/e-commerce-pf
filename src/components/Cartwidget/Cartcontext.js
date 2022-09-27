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

    //Funcion Total Items
        const totalItems = () => cart.reduce((acumI, itemActual) => acumI + itemActual.quantity, 0); 
        //Funcion Precio Total
            const totalPrice = () => {
                return cart.reduce((acumP, act) => acumP + act.quantity * act.price, 0);
            }

    return (
            <CartContext.Provider value={{
                clearCart,
                inCart,
                remItem,
                addItem,
                totalItems,
                totalPrice,
                cart
            }}>
                {children}
            </CartContext.Provider>
  )
}

export default CartProvider;