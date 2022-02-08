/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

import AuthorCard from "./AuthorCard";

test('render author in a card', () => {
    const author = {
        email: 'i@author.com',
        avatar: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
        about: 'young & beautiful'
    }

    const { getByText } = render(<AuthorCard author={author}/>);
    expect(getByText('i@author.com')).toBeInTheDocument();
})
