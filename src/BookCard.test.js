/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import BookCard from "./BookCard";
test('render book in a card', () => {
    const book = {
        title: 'New Book',
        cover: 'http://www.workyouenjoy.com/wp-content/uploads/2012/07/Red-Book.jpg',
        progress: '40%',
        description: 'new',
        pages: 360,
        language: 'EN',
        minPrice: '$100',
        expectedPriceByOne: '$150',
        collectedAmount: '$1500',
        expectedAmount: '$3000',
        author: {
            email: 'i@author.com',
            avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
            about: 'young & beautiful'
        }
    }

    const { getByText } = render(<BookCard book={book}/>);
    expect(getByText('title: New Book')).toBeInTheDocument();
})
