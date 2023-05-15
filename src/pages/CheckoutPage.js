import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/CartSlice';

function CheckoutPage() {
    const dispatch = useDispatch();

    return (
        <div className='container w-50 mt-5 p-5'>
            <form>
                <div className="form-group">
                    <label for="cardnumber">Card number</label>
                    <input type="number" pattern="[0-9]{16}" min="1000000" max="9999999999999999" className="form-control" id="cardnumber" aria-describedby="cardnumberHelp" placeholder="Enter 16 digit credit card number" required />
                    <small id="emailHelp" className="form-text text-muted">Don't worry! It is safe with us.</small>
                </div>
                <div className="form-group">
                    <label for="nameoncard">Name on card</label>
                    <input type="text" className="form-control" id="nameoncard" aria-describedby="nameoncardHelp" placeholder="Enter name as on credit card" required />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label for="cvv">CVV</label>
                    <input type="password" pattern="[0-9]{3}" className="form-control" id="cvv" placeholder="***" required />
                </div>
                <div className="form-check text-center">
                    <input type="checkbox" className="form-check-input" id="savedetails" />
                    <label className="form-check-label" for="savedetails">Save card details</label>
                </div>
            </form>

            <div className='w-100 text-center p-3'>
                <button type='button' onClick={()=> dispatch(clearCart())} className="btn btn-primary"><Link className='btn-primary' to="/">Submit</Link></button>
            </div>

        </div>
    )
}

export default CheckoutPage
