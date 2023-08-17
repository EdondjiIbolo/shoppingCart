import { Filters} from './Filters.jsx'
import { CartIcon } from './icons.jsx'
export function Header(){
    return(
        <header>
            <div> 
                <h1>Shopping Cart <CartIcon/></h1>
            </div>
            <Filters />
        </header>
    )
}