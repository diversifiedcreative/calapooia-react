import React, { Component } from 'react';
import Header from './headerFooter/HeaderComponent';
import Footer from './headerFooter/FooterComponent';
import Home from './homePage/HomeComponent';
import River from './riverPage/RiverComponent';
import Explore from './mapPage/ExploreMapComponent';
import Resources from './resourcesPage/ResourcesComponent';
import TripReports from './tripsPage/TripReportsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './toolComponents/ScrollToTop';
import './main.css';

class Main extends Component {
	render() {
		return (
			<>
				<Header />
				<div className="content-container">
					<ScrollToTop>
						<Switch>
							<Route path="/home" component={Home} />
							<Route path="/river" component={River} />
							<Route path="/exploreMap" component={Explore} />
							<Route path="/resources" component={Resources} />
							<Route path="/tripReports" component={TripReports} />
							<Redirect to="/home" />
						</Switch>
					</ScrollToTop>
				</div>
				<div className="footer-container">
					<Footer />
				</div>
			</>
		);
	}
}

export default Main;
