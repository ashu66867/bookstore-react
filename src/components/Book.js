import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { addToCart } from "../features/CartSlice";


function Book({ title, _id, price, author, img, rating }) {
  
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  // Find out if the book is added to cart- helpful for conditionally rendering "Go To Cart" button
  const isInCart = cartItems.find(item => item.title === title);

  return (
    <div data-testid="book" className="card m-2" style={{ width: "12rem" }}>

      <div>
        <img style={{ height: "280px" }} src={img} className="card-img-top" alt={`${title} Image`} />
      </div>

      <div className="card-body p-2">
        <span data-testid="title" className="d-block mb-0 h6 text-truncate">{title}</span>{/* card-title */}

        <div className='row align-items-center justify-content-between mb-1'>
          <div className='pl-3'><span data-testid="price" className=''>₹{price}</span></div>
          <div className='pr-3'><span data-testid="rating" class="h5 text-muted">{rating}</span><span class="text-muted">/5</span></div>
        </div>

        <div class="row justify-content-around">

          {(!isInCart) ?
            <button
              data-testid="add-to-cart"
              className="btn btn-outline-success"
              onClick={() => dispatch(addToCart({ id: _id, title: title, price: price, imgUrl: img, author: author }))}>
              Add
            </button>
            :
            <Link
              data-testid="go-to-cart"
              className='btn btn-outline-success'
              to="cart" >
              Go To Cart
            </Link>
          }
        </div>
      </div>

    </div>
  )
}

export default Book
