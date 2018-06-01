'use strict'

import React from 'react';
import { Carousel, Grid, Col, Row, Button } from 'react-bootstrap';
import BookItem from './bookItem';Ï

class BooksList extends React.Component {
    render() {
        const bookslist = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((name) => (
            <Col xs={12} sm={6}>
                <BookItem name={name + ".jpg"} />
            </Col>
        ));

        return (
            <Grid>
                <Row style={{ marginTop: '15px' }}>
                    {bookslist}
                </Row>
            </Grid>
        );
    }
}

export default BooksList;