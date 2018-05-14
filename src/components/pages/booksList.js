'use strict'

import React from 'react';
import {connect} from 'react-redux';

class BooksList extends React.Component {
    render() {

        // console.log('ARE WE CAN ACESSSING THE STATE: ', this.props.books );

        const booksList = this.props.books.map(function(book){
            return (
                <div key={book.id}>
                    <h3>Title: {book.title}</h3>
                    <h3>Description: {book.description}</h3>
                    <h3>Price: {book.price}</h3>
                </div>
            )
        })

        return (
            <div>
                <h1>Hello React</h1>
                {booksList}
            </div>
        );
    }
}

function mapStateToProp(state) {
    return {books: state.books.books}
}

export default connect(mapStateToProp)(BooksList);