import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';

import { clearCart } from '../features/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
    const { totalBill, cartItems, totalItems } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    return (
        (totalItems > 0 && true) ?
            <div className='container mt-5 p-5'>
                <div className='row'>
                    <div className='col col-6'>Item Description</div>
                    <div className='col col-3 text-center'>Quantity</div>
                    <div className='col text-center'>Price</div>
                </div>
                <div className='row align-items-center'>
                    {
                        cartItems.map((item) => {
                            return (
                                <CartItem key={`CartItem_${item.id}`} {...item}></CartItem>
                            )
                        })
                    }
                </div>

                <div className='row'>
                    <div className='col col-9 h6'>Total</div>
                    <div className='col text-center h6'>₹ {totalBill}</div>
                </div>
                <div className='text-center p-3'>
                    <Link data-testid="checkout" className='btn btn-primary m-3' to='/checkout' >Checkout</Link>
                    <button data-testid="clear-cart" className='btn btn-danger m-3' onClick={() => dispatch(clearCart())} >Clear Cart</button>
                </div>

            </div>

        : // else 
            <div className='mt-5 text-center p-5'>Your cart is empty.</div>


    )
}

export default Cart
