// This file is for unit testing Cart page

import { screen } from '@testing-library/react';
import Cart from '../pages/Cart';
import { renderWithProviders } from '../utils/utils-for-tests'

describe('Cart', () => {

    test('should render empty cart', async () => {
        const initialState = {
            books: [],
            cartItems: [],
            totalItems: 0,
            totalBill: 0,
            isLoading: false,
        }
        renderWithProviders(<Cart />, initialState)
        expect(screen.getByText('Your cart is empty.')).toBeInTheDocument();
    })

})
