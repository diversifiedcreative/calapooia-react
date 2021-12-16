import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from 'config';
import './headFoot.css';

export function Header() {
	const [isNavOpen, toggleNav] = useState(false);

	return (
		<Navbar dark className="bg-dark dark header-nav" expand="md">
			<NavbarBrand className="col-sm-3 col-lg-4" href="/">
				<img src="cala-favicon.png" alt="calapooia logo" className="navbar-logo" />
				<span className="d-none d-lg-inline">The Calapooia River</span>
			</NavbarBrand>
			<NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
			<Collapse isOpen={isNavOpen} navbar>
				<Nav navbar className="offset-sm-1 offset-lg-2">
					<NavLink className="nav-link" to="/" onClick={() => toggleNav(false)}>
						Home
					</NavLink>
					<NavLink className="nav-link" to="/river" onClick={() => toggleNav(false)}>
						The River
					</NavLink>
					<NavLink className="nav-link" to="/exploreMap" onClick={() => toggleNav(false)}>
						Explore Map
					</NavLink>
					<NavLink className="nav-link" to="/resources" onClick={() => toggleNav(false)}>
						Resources
					</NavLink>
					<NavLink className="nav-link" to="/tripReports" onClick={() => toggleNav(false)}>
						Trip Reports
					</NavLink>
				</Nav>
			</Collapse>
		</Navbar>
	);
}

export function Footer() {
	return (
		<div className="container-fluid bg-dark text-light footer-content">
			<div className="row">
				<div className="d-none d-sm-inline align-items-center col-sm-3 foot-col">
					<img src="cala-favicon.png" alt="calapooia logo" className="foot-logo" />
				</div>
				<div className="col-4 col-sm-3 foot-col foot-nav">
					<Nav vertical>
						<NavLink className="foot-link" to="/">
							Home
						</NavLink>
						<NavLink className="foot-link" to="/river">
							The River
						</NavLink>
						<NavLink className="foot-link" to="/exploreMap">
							Explore Map
						</NavLink>
						<NavLink className="foot-link" to="/resources">
							Resources
						</NavLink>
						<NavLink className="foot-link" to="/tripreports">
							Trip Reports
						</NavLink>
					</Nav>
				</div>
				<div className="col-8 col-sm-6 text-center foot-col">
					<p>Created as a public service by:</p>
					<a href="http://diversifiedcreative.com/" target="_blank" rel="noreferrer">
						<img src={baseUrl + 'img/dc-logo-sm.png'} alt="Diversified Creative logo" height="50px" />
					</a>
					<hr style={{ borderTop: '3px solid white', margin: '6px 0 6px' }} />
					<p>&copy; 2021 Diversified Creative</p>
				</div>
			</div>
		</div>
	);
}
