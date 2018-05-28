'use strict';

import React from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { InputGroup, DropdownButton, Image, Col, Row, MenuItem } from 'react-bootstrap';

export default class BooksForm extends React.Component {
    render() {
        return (
            <Row>
                <Col xs={12} sm={6}>
                    <Panel>
                        <InputGroup>
                            <FormControl type="text" ref="images"
                                // value={this.state.img}
                                placeholder="select an image from dropdown"
                            />
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                id="input-dropdown-addon"
                                title="Select an images"
                            >
                                <MenuItem key="1">Item 1</MenuItem>
                                <MenuItem key="2">Item 2</MenuItem>
                                <MenuItem key="3">Item 3</MenuItem>
                            </DropdownButton>
                        </InputGroup>
                    </Panel>

                </Col>

                <Col xs={12} sm={6}>
                    <Panel style={{ padding: '15px' }}>
                        <FormGroup controlId="title" validationState={this.props.validation}>
                            <ControlLabel>Title</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Title"
                                ref="title"
                            />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup controlId="description" validationState={this.props.validation}>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Description"
                                ref="description"
                            />
                            <FormControl.Feedback />
                        </FormGroup>

                        <FormGroup controlId="price" validationState={this.props.validation}>
                            <ControlLabel>Price</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Enter Price"
                                ref="price"
                            />
                            <FormControl.Feedback />
                        </FormGroup>

                        <Button bsStyle="success">
                            Save Book
                        </Button>
                    </Panel>
                    <Panel style={{ padding: '15px' }}>
                        <FormGroup>
                            <ControlLabel>Select a book to delect</ControlLabel>
                            <FormControl
                                ref="delete"
                                componentClass="select"
                                placeholder="select">
                                <option value="select">select</option>
                                <option value="1">Book - 1</option>
                            </FormControl>
                        </FormGroup>
                        <Button bsStyle="danger">Delete</Button>
                    </Panel>
                </Col>
            </Row>
        );
    }
};
