import { createContext, useState } from "react";
export const Cartcontext = createContext()
export function CartProvider ({children}){
    const [ cart, setCart] = useState([])
    const  addToCart = product =>{
        //check if the product is in the cart
        const productInCart= cart.findIndex(item=>item.id==product.id)
        if(productInCart>=0){
            const newCart = structuredClone(cart)
            newCart[productInCart].quantity +=1
           return setCart(newCart)
        }
        //product not in cart
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity:1
            }
        ]))
        console.log(cart)
    }
    const clearCart = ()=>{
        setCart([])
    }
    const removeFromCart = product =>{
        setCart(prevState=>prevState.filter(item=> item.id !== product.id))

    }
    return(
        <Cartcontext.Provider value={{
            cart,
            clearCart,
            addToCart,
            removeFromCart
            
        }}>
            {children}
        </Cartcontext.Provider >
    )
}