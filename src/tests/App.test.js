// This file is for unit testing App

import React from 'react';
import { screen } from '@testing-library/react';

import App from '../App';
import { renderWithProviders } from '../utils/utils-for-tests';

describe('App', () => {

  test('should render ...Loading', () => {
    const initialState = {
      books: [],
      cartItems: [],
      totalItems: 0,
      totalBill: 0,
      isLoading: true,
    }
    renderWithProviders(<App />, { initialState })
    expect(screen.getByText('...Loading')).toBeInTheDocument();
  })

})

