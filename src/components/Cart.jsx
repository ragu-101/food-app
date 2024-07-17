import React, { useContext } from 'react'
import Modal from '../UI/Modal';
import CartContext from '../store/Cartcontext';
import {Currencyformatter} from '../util/Currencyformatter.js';
import Button from '../UI/Button';

const Cart = () => {
    const cartCtx = useContext(CartContext);

    const cartTotal = cartCtx.items.reduce((item,totalPrice)=> totalPrice + item.quantity * item.price,0 ) // initial value

  return <Modal className='cart'>
    <h2>Your Cart</h2>
    <ul>
        {cartCtx.items.map((item)=><li key={item.id}>{item.name} - {item.quantity}</li>)}
    </ul>
    <p className='cart-total'>{Currencyformatter.format(cartTotal)}</p>
    <p className='modal-action'>
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
    </p>
  </Modal>
}

export default Cart;