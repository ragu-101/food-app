import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import CartContext from '../store/Cartcontext';
import {Currencyformatter} from '../util/Currencyformatter.js';
import Button from '../UI/Button';
// import UserProgressContext from '../store/userprogressContext.jsx';
import userProgressContext from '../store/UserProgressContext.jsx';
import CartItem from './CartItem.jsx';

const Cart = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)

    const cartTotal = cartCtx.items.reduce((totalPrice,item)=> totalPrice + item.quantity * item.price,0 ) // initial value

    console.log("carttotal",cartCtx)
    function handleCloseCart(){
      userProgressCtx.hideCart()
    }

    function handleGoToCheckout(){
      userProgressCtx.showCheckOut();
    }

  return <Modal className='cart' open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress ==='cart' ? handleCloseCart : null}>
    <h2>Your Cart</h2>
    <ul>
        {cartCtx.items.map((item)=><CartItem 
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
        onIncrease={()=>cartCtx.addItem(item)}
        onDecrease={()=>cartCtx.removeItem(item.id)}
        />)} 
    </ul>
    <p className='cart-total'>{Currencyformatter.format(cartTotal)}</p>
    <p className='modal-action'>
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        {cartCtx.items.length>0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
        
    </p>
  </Modal>
}

export default Cart;