// This file is for unit testing Book component

import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/utils-for-tests';
import Book from '../components/Book';

describe('Book', () => {

    test('should render and contain title, price, rating, "Add To Cart" button', () => {
        const props = {
            title: "Test Book name",
            _id: "sdfgdgs",
            price: 100,
            author: "Author name",
            img: "image url",
            rating: 3.5
        }
        renderWithProviders(<Book {...props} />)

        expect(screen.getByTestId('title').innerHTML).toEqual("Test Book name");

        expect(screen.getByTestId('price').innerHTML).toEqual('₹100');

        expect(screen.getByTestId('rating').innerHTML).toEqual('3.5');

        expect(screen.getByTestId('add-to-cart')).toBeInTheDocument();
    })

})