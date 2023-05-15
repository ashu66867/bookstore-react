// This file exports a custome version of render

// The custom render function should let us:
//   Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
//   Alternately pass in an already-created Redux store instance
//   Pass through additional options to RTL's original render function
//   Automatically wrap the component being tested with a <Provider store={store}>
//   Return the store instance in case the test needs to dispatch more actions or check state 

import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// As a basic setup, import your same slice reducers
import { cartSlice } from "../features/CartSlice";

// import { setupStore } from "../store/store";

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        // store = setupStore(preloadedState),
        store = configureStore({
            reducer: { cart: cartSlice.reducer },
            preloadedState,
          }),
        ...renderOptions
    } = {}
) 
{
    function Wrapper({ children }) {
        return <Provider store={store}>
            {children}
        </Provider>;
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
