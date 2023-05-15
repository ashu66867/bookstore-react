import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { getBooksFromAPI } from './features/CartSlice';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import CheckoutPage from './pages/CheckoutPage';
import Cart from './pages/Cart';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getBooksFromAPI());
  }, []);

  if (isLoading) {
    return (
      <div data-testid="loading" className='loading mt-5 p-5 text-center'>...Loading</div>
    )
  }

  return (
    <div data-testid="app" className="app">
      <Navbar />

      <Routes>
        <Route path='/' element={<MainPage />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/checkout' element={<CheckoutPage />} ></Route>

      </Routes>

    </div>
  );
}

export default App;
