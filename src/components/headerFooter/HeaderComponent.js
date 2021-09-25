import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <Navbar dark className="bg-dark dark" sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">The Calapooia River</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/river">The River</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/exploreMap">Explore Map</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/resources">Resources</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/tripReports">Trip Reports</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Header;