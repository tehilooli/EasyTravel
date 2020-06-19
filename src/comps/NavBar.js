import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends Component {

    render() {
        return (
            <div className="EasyTravel">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/HomePage">
                        <img
                            src="./images/logo_small.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="EasyTravel_logo"
                        />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/HomePage">Home</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}