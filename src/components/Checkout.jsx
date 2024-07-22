import React, { useContext } from 'react'
import CartContext from '../store/Cartcontext';
import Modal from '../UI/Modal';
import { Currencyformatter } from '../util/Currencyformatter';
import Input from '../UI/Input';

const Checkout = () => {
    const cartCtx  = useContext(cartCtx);
    const cartTotal = cartCtx.items.reduce((totalPrice,item)=> totalPrice + item.quantity * item.price,0 )
  return <Modal>
    <form>
        <h2>Checkout</h2>
        <p>Total Amount : {Currencyformatter.format(cartTotal)}</p>

        <Input label="Full Name" id="full-name" type="text" />
    </form>
  </Modal>
}

export default Checkout