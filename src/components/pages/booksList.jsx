'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksActions';

import { Carousel, Grid, Col, Row, Button } from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './BooksForm';
import Cart from './cart';

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
                    <Col xs={12}
                        sm={6} 
                        md={6}
                        key={book._id}>
                        <BookItem
                            _id={book._id}
                            title={book.title}
                            description={book.description}
                            images={book.images}
                            price={book.price}
                        />
                    </Col>
                );
            })

        return (
            <Grid
            // style={{ marginTop: '60px' }}
            >
                <Row style={{ margin: '0px' }}>
                    <Carousel>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/images/c1.jpg" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/images/c2.jpg" />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={900} height={500} alt="900x500" src="/images/c3.jpg" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <Cart />
                </Row>
                <Row  style={{ marginTop: '15px' }}>
                    <Col
                     xs={12}
                    // sm={6}
                    >
                        {/* <BooksForm /> */}
                    </Col>
                    {booksList}
                </Row>
            </Grid>
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

