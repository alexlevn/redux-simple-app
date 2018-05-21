'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';

import { Gird, Col, Row, Button } from 'react-bootstrap';


// import { BookItem } from './bookItem';

class BooksList extends React.Component {

    componentDidMount() {
        // Dispatch an action.
        this.props.getBooks();
    }

    render() {

        // console.log('ARE WE CAN ACESSSING THE STATE: ', this.props.books );

        const booksList = this
            .props
            .books
            .map(function (book) {
                return (
                    <div key={book.id}>
                        <h3>Title: {book.title}</h3>
                        <p>Description: {book.description}</p>
                        <p>Price: {book.price}</p>
                        <Button bsStyle='success'>Buy now</Button>
                    </div>
                )
            })

        return (
            <div className="container">
                <Row style={{ marginTop: '15px' }}>
                    {booksList}
                </Row>
            </div>
        );
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

export default connect(mapStateToProp, mapDispatchToProps)(BooksList);

