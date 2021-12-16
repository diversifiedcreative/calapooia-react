import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
	const [isNavOpen, toggleNav] = useState(false);

    return(
        <Navbar dark className="bg-dark dark" sticky="top" expand="md">
            <div className="container">
                <NavbarBrand className="mr-auto" href="/"><img src='cala-favicon.png' alt='calapooia logo' className="navbar-logo" />The Calapooia River</NavbarBrand>
                <NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
                <Collapse isOpen={isNavOpen} navbar>
                    <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink className="nav-link" to="/home" onClick={() => toggleNav(false)}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/river" onClick={() => toggleNav(false)}>The River</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/exploreMap" onClick={() => toggleNav(false)}>Explore Map</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/resources" onClick={() => toggleNav(false)}>Resources</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/tripReports" onClick={() => toggleNav(false)}>Trip Reports</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    )
}


export default Header;