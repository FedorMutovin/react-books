import React from 'react'
import ReactDOMServer from "react-dom/server";
import App from "./App";

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

const render = () => ReactDOMServer.renderToString(<App book={book}/>);

export default render;
