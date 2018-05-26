'use strict';

import React from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

import { InputGroup, DropdownButton, Image, Col, Row, MenuItem } from 'react-bootstrap'; // This is for add images function

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { findDOMNode } from 'react-dom';
import { postBooks, deleteBooks } from '../../actions/booksActions';

import axios from 'axios';

class BooksForm extends React.Component {

    constructor() {
        super();
        this.state = {
            images: [{}],
            img: ''
        }
    }

    componentDidMount() {
        axios.get('/api/images')
            .then(function (res) {
                this.setState({ images: res.data });
            }.bind(this))
            .catch(function (err) {
                this.setState({ images: 'error loading image files from the server', img: '' });
            }.bind(this))
    }

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

    handleSelect(img) {
        // console.log('image.name = ', img);
        this.setState({
            img: '/images/' + img
        });
    }

    render() {

        const booksList = this.props.books.map(function (book) {
            return (
                <option key={book._id}>{book._id}</option>
            )
        });

        const imgList = this.state.images.map(
            function (imageItem, i) {
                return (
                    <MenuItem
                        onClick={this.handleSelect.bind(this, imageItem.name)}
                        key={i}>
                        {imageItem.name}
                    </MenuItem>
                )
            }, this);

        return (
            <Well>
                <Row>
                    <Col xs={12} sm={6}>
                        <Panel>
                            <InputGroup>
                                <FormControl type="text" ref="image" value={this.state.img} />
                                <DropdownButton
                                    componentClass={InputGroup.Button}
                                    id="input-dropdown-addon"
                                    title="Select an image"
                                >
                                    {imgList}
                                    {/* <MenuItem key="1">Item</MenuItem> */}
                                </DropdownButton>
                            </InputGroup>
                            <Image src={this.state.img} responsive />

                        </Panel>
                    </Col>
                    <Col xs={12} sm={6}>
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
                                bsStyle="danger" >Delete
                            </Button>
                        </Panel>
                    </Col>
                </Row>
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
