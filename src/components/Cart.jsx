import { useId } from "react";
import { ClearCartIcon ,CartIcon } from "./icons";
import { useCart } from "../hooks/useCart";
import './cart.css'
function CartItem({thumbnail , price , title , quantity , addToCart}){
    return (

                    <li>
                        <img src={thumbnail} alt={title} />
                            <div>
                                <strong>
                                   {title}
                                </strong>
                                <span> - ${price}</span>
                            </div>
                            <footer>
                                <small>
                                    Qty:{quantity}
                                </small>
                                <button onClick={addToCart}>+</button>
                            </footer>
                    </li>

    )
}
export function Cart(){
    const cartCheckbox = useId()
    const {cart , clearCart , addToCart} = useCart()
    return(
        <>
            <label className="cart-button" htmlFor={cartCheckbox}>
               <CartIcon/>
               

            </label>
            <input type="checkbox" id={cartCheckbox} hidden/>
            <aside className="cart">
                <ul>
                    {
                        cart.map(product=>(
                            <CartItem key={product.id} {...product} addToCart={()=> addToCart(product)}/>
                        ))
                    }
                </ul>
                <button onClick={clearCart} className="clear-button">
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}