import React from 'react';

class AuthorCard extends React.Component {
    render() {
        const { author: { email, avatar, about} } = this.props
        return (
            <div style={styles.container
            }>
                <div style={styles.imageBox}>
                    <img style={styles.image} src={avatar} alt={email}/>
                </div>
                <div style={styles.cardBody}>
                    <div>{email}</div>
                    <div>{about}</div>
                </div>
            </div>
        );
    }
}

export default AuthorCard;

const styles = {
    container: {
        display: 'flex'
    },
    imageBox: {
        maxWidth: '50px'
    },
    image: {
        width: '100%'
    },
    cardBody: {
        flex: '1'
    }

}