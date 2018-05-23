'use strict';

import React from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { findDOMNode } from 'react-dom';
import { postBooks, deleteBooks } from '../../actions/booksActions';




class BooksForm extends React.Component {

    handleSubmit() {
        const book = [{
            id: 5,
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }];
        // console.log(book);
        this.props.postBooks(book);
    }

    onDelete() {
        let bookId = findDOMNode(this.refs.delete).value;
        this.props.deleteBooks(bookId);
    }

    render() {

        const booksList = this.props.books.map(function (book) {
            return (
                <option key={book._id}>{book._id}</option>
            )
        });

        return (
            <Well>
                <Panel style={{ padding: '15px' }}>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter Title"
                            ref="title" />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter description"
                            ref="description" />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl
                            type="text"
                            placeholder="Enter price"
                            ref="price" />
                    </FormGroup>
                    <Button
                        onClick={this.handleSubmit.bind(this)}
                        bsStyle="primary">
                        Save book
                    </Button>
                </Panel>
                <Panel style={{ padding: '15px' }}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Select a book to delect</ControlLabel>
                        <FormControl
                            ref="delete"
                            componentClass="select"
                            placeholder="select">
                            <option value="select">select</option>
                            {booksList}
                        </FormControl>
                    </FormGroup>
                    <Button
                        onClick={this.onDelete.bind(this)}
                        bsStyle="danger" >Delete</Button>
                </Panel>
            </Well>
        );
    }
};

function mapStatetoProps(state) {
    return {
        books: state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postBooks,
        deleteBooks
    }, dispatch);
}

// export default BooksForm;
export default connect(mapStatetoProps, mapDispatchToProps)(BooksForm);
