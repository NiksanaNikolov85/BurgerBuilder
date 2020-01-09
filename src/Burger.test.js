import React from 'react';
import { render } from '@testing-library/react';
import Burger from './componets/Burger/Burger';

describe('Burger rendering', () => {
    test('check if there is Meat layer', () => {
        const props = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 1,
                meat: 1
            }
        }
        const { container, queryAllByText } = render(<Burger {...props} />);
        queryAllByText('Burger');
        const meatLayer = container.querySelectorAll('.Meat');

        expect(meatLayer.length).toEqual(1);
    });
});