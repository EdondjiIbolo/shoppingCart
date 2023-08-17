import { Cartcontext } from "../context/cart";
import { useContext } from "react";

export function useCart(){
    const context = useContext(Cartcontext)
    if(context==undefined){
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}