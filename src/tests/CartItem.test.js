// This file is for unit testing CartItem component

import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/utils-for-tests';
import CartItem from '../components/CartItem';

describe('CartItem', () => {

    test('should render with all info', () => { 
        const fakeprops = {
            id: "1121",
            title: "God's Country",
            quantity: 2,
            price: 399,
            imgUrl: 'image url',
            author: "Blake Shelton"
        }
        
        renderWithProviders(<CartItem {...fakeprops}/>);

        expect(screen.getByTestId('thumbnail')).toBeInTheDocument();
        
        expect(screen.getByTestId('title').innerHTML).toEqual("God's Country");

        expect(screen.getByTestId('author').innerHTML).toEqual("Blake Shelton");

        expect(screen.getByTestId('quantity').innerHTML).toEqual('2');

        expect(screen.getAllByRole('button')).toHaveLength(3);

        expect(screen.getByTestId('price').innerHTML).toEqual('₹ 399');

    })

})