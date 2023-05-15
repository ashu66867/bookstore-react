import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooksFromAPI = createAsyncThunk('getBooks', () => {
    return fetch('http://localhost:5000/books')
        .then(resp => resp.json())
        .catch(err => console.log(err))
})

const initialState = {
    books: [],
    cartItems: [],
    totalItems: 0,
    totalBill: 0,
    isLoading: true,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.totalItems = 0;
            state.totalBill = 0;
        },
        addToCart: (state, { payload }) => {
            // let foundCartItem = state.cartItems.find((i) => i.id == payload.id)
            // if (foundCartItem) {
            //     foundCartItem.quantity += 1;
            //     state.totalItems += 1;
            // } else 
            // {
                state.cartItems.push({ quantity: 1, ...payload });
                state.totalItems += 1;
                state.totalBill += payload.price;
            // }
        },
        removeFromCart: (state, { payload }) => {
            let itemToRemove = state.cartItems.find((i) => i.id == payload.id);
            let otherItems = state.cartItems.filter((i) => i.id != payload.id);
            state.cartItems = otherItems;
            state.totalItems = state.cartItems.reduce((count, item) => {
                count = count + item.quantity
                return count;
            }, 0);
            state.totalBill -= (payload.price * itemToRemove.quantity);
        },
        incrementItem: (state, { payload }) => {
            let cartItem = state.cartItems.find((item) => item.id == payload.id);
            cartItem.quantity += 1;
            state.totalItems += 1;
            state.totalBill += payload.price;
        },
        decrementItem: (state, { payload }) => {
            let cartItem = state.cartItems.find((item) => item.id == payload.id);
            cartItem.quantity -= 1;
            state.totalItems -= 1;
            state.totalBill -= payload.price;
        },
    },
    extraReducers: {
        [getBooksFromAPI.pending]: (state) => {
            state.isLoading = true;
        },
        [getBooksFromAPI.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBooksFromAPI.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { clearCart, incrementItem, decrementItem, addToCart, removeFromCart } = cartSlice.actions;


// Export the slice reducer as the default export
export default cartSlice.reducer;
