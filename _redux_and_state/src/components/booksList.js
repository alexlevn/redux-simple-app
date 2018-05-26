'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreator, bindActionCreators } from 'redux';
import { getBooks } from '../app';

class BooksList extends React.Component {
    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        const booksList = this
            .props
            .books
            .map(function (book) {
                return (
                    <div key={book.id}>
                        <h3>Title: {book.title}</h3>
                        <p>Description: {book.description}</p>
                        <p>Price: {book.price}</p>
                    </div>
                )
            });
        return (
            <div>
                <h2>Books List:</h2>
                {booksList}
            </div>
        )
    }
}

function mapStateToProp(state) {
    return { books: state.books.books }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks
    }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProps)(BooksList);// Tra ra mot bookslist, co action, & prop