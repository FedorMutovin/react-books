import React from 'react';
import AuthorCard from "./AuthorCard";

class BookCard extends React.Component {
    render() {
        const { book: { title, cover, progress, description, pages, language,
            minPrice, expectedPriceByOne, collectedAmount, expectedAmount, author} } = this.props
        return (
            <div style={styles.container
            }>
                <div style={styles.imageBox}>
                    <img style={styles.image} src={cover} alt={title}/>
                </div>
                <div style={styles.cardBody}>
                    <div>title: {title}</div>
                    <div>description: {description}</div>
                    <div>progress: {progress}</div>
                    <div>pages: {pages}</div>
                    <div>language: {language}</div>
                    <div>minPrice: {minPrice}</div>
                    <div>expectedPriceByOne: {expectedPriceByOne}</div>
                    <div>collectedAmount: {collectedAmount}</div>
                    <div>expectedAmount: {expectedAmount}</div>
                    <AuthorCard author={author}/>
                    <button>Subscribe</button>
                </div>
            </div>
        );
    }
}

export default BookCard;

const styles = {
    container: {
        display: 'flex'
    },
    imageBox: {
        maxWidth: '200px'
    },
    image: {
        width: '100%'
    },
    cardBody: {
        flex: '1'
    }

}