import React from 'react'
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../features/CartSlice';

function CartItem({ id, title, quantity, price, imgUrl, author }) {
    const dispatch = useDispatch();

    function HandleDecrement() {
        if (quantity > 1) {
            dispatch(decrementItem({ id: id, price: price }))
        } else {
            dispatch(removeFromCart({ id: id, price: price }))
        }
    }

    return (
        <>
            <div className='col col-6'>
                <div className='row align-items-center'>
                    <div className='col col-4 py-2'>
                        <img data-testid="thumbnail" src={imgUrl} style={{ height: "100px", aspectRatio: "auto" }} alt={`${title} Image`} />
                    </div>
                    <div className='col col-8'>
                        <p data-testid="title" className='mb-1 h6 text-muted'>{title}</p>
                        <p data-testid="author" className='mb-1 text-muted'>{author}</p>
                    </div>
                </div>
            </div>

            <div className='col col-3 text-center'>
                <div data-testid="quantity" className=''>{quantity}</div>

                <div className="btn-group">
                    <button type="button" data-testid="increment" className="btn badge rounded-pill bg-success" onClick={() => dispatch(incrementItem({ id: id, price: price }))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" /></svg>
                    </button>
                    <button type="button" data-testid="remove" className='btn badge rounded-pill btn-danger' key={id} onClick={() => dispatch(removeFromCart({ id: id, price: price }))}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="32"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>                
                    </button>
                    <button type="button" data-testid="decrement" className="btn badge rounded-pill bg-warning" onClick={HandleDecrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>
                    </button>
                </div>
            </div>

            <div data-testid="price" className='col text-center'>₹ {price}</div>
        </>
    )
}

export default CartItem