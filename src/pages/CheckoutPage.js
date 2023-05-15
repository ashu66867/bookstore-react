import React from 'react'

function CheckoutPage() {
    return (
        <div className='container w-50 mt-5 p-5'>
            <form>
                <div className="form-group">
                    <label for="cardnumber">Card number</label>
                    <input type="number" className="form-control" id="cardnumber" aria-describedby="cardnumberHelp" placeholder="Enter 16 digit credit card number" />
                    <small id="emailHelp" className="form-text text-muted">Don't worry! It is safe with us.</small>
                </div>
                <div className="form-group">
                    <label for="nameoncard">Name on card</label>
                    <input type="text" className="form-control" id="nameoncard" aria-describedby="nameoncardHelp" placeholder="Enter name as on credit card" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label for="cvv">CVV</label>
                    <input type="password" className="form-control" id="cvv" placeholder="***" />
                </div>
                <div className="form-check text-center">
                    <input type="checkbox" className="form-check-input" id="savedetails" />
                    <label className="form-check-label" for="savedetails">Save card details</label>
                </div>
                <div className='w-100 text-center p-3'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutPage