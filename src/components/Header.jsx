import logo from '../assets/logo.jpg'
import Button from '../UI/Button'
import CartContext from '../store/Cartcontext'
import { useContext } from 'react'
import UserProgressContext from '../store/userprogressContext'

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNUmberOfItems,item)=>{
        return totalNUmberOfItems + item.quantity;
    },0); // here 0 is the starting value of the execution.

    function handleShowCart(){
        userProgressCtx.showCart();
    }

    return <header id="main-header">
        <div id="title">
            <img src={logo} alt="Logo" />
            <h1>Food App</h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button> {/* by leaving empty prop it consider as true */}
        </nav>
    </header>
}