// This file tests the reducers for cartSlice

import cartReducer, { clearCart, incrementItem, decrementItem, addToCart, removeFromCart } from "../features/CartSlice.js";

describe('CartSlice', () => {

    test('should return initial state', () => {
        expect(cartReducer(undefined, { type: undefined }))
            .toEqual(
                { books: [], cartItems: [], totalItems: 0, totalBill: 0, isLoading: true, }
            )
    })

    test('should handle addToCart', () => {
        const initialState = { books: [], cartItems: [], totalItems: 0, totalBill: 0, }
        const payload = { id: "fhskdsdf", title: "Book Name", price: 100, imgUrl: "imgURL", author: "Author Name" }

        expect(cartReducer(initialState, addToCart(payload)))
            .toEqual(
                {
                    books: [],
                    cartItems: [{ quantity: 1, id: "fhskdsdf", title: "Book Name", price: 100, imgUrl: "imgURL", author: "Author Name" }],
                    totalItems: 1,
                    totalBill: 100,
                }
            )
    })

    test('should handle incrementItem', () => {
        const initialState = { books: [], cartItems: [{ quantity: 1, id: "fhskdsdf", title: "Book Name", price: 100, imgUrl: "imgURL", author: "Author Name" }], totalItems: 1, totalBill: 100, }
        const payload = { id: "fhskdsdf", price: 100, }

        expect(cartReducer(initialState, incrementItem(payload)))
            .toEqual(
                {
                    books: [],
                    cartItems: [{ quantity: 2, id: "fhskdsdf", title: "Book Name", price: 100, imgUrl: "imgURL", author: "Author Name" }],
                    totalItems: 2,
                    totalBill: 200,
                }
            )
    })

    test('should handle decrementItem', () => {
        const initialState = { books: [], cartItems: [{ quantity: 2, id: "fhskdsdf", title: "Book Name", price: 100, imgUrl: "imgURL", author: "Author Name" }], totalItems: 2, totalBill: 200, }
        const payload = { id: "fhskdsdf", price: 100, }

        expect(cartReducer(initialState, decrementItem(payload)))
            .toEqual(
                {
                    books: [],
                    cartItems: [{ quantity: 1, id: "fhskdsdf", title: "Book Name", price: 100, imgUrl: "imgURL", author: "Author Name" }],
                    totalItems: 1,
                    totalBill: 100,
                }
            )
    })

    test('should handle removeFromCart', () => {
        const initialState = { books: [], cartItems: [{ quantity: 1, id: "fhskdsdf", title: "Book Name", price: 100, imgUrl: "imgURL", author: "Author Name" }], totalItems: 1, totalBill: 100, }
        const payload = { id: "fhskdsdf", price: 100, }

        expect(cartReducer(initialState, removeFromCart(payload)))
            .toEqual(
                {
                    books: [],
                    cartItems: [],
                    totalItems: 0,
                    totalBill: 0,
                }
            )
    })

    test('should handle clearCart', () => {
        const initialState = {
            books: [],
            cartItems: [
                { quantity: 2, id: "fhskdsdf", title: "Book Name", price: 100, imgUrl: "imgURL", author: "Author Name" },
                { quantity: 1, id: "sdfcvdvfdd", title: "Book Name2", price: 200, imgUrl: "imgURL2", author: "Author Name2" }
            ],
            totalItems: 2,
            totalBill: 200,
        }

        expect(cartReducer(initialState, clearCart()))
            .toEqual(
                {
                    books: [],
                    cartItems: [],
                    totalItems: 0,
                    totalBill: 0,
                }
            )
    })

})