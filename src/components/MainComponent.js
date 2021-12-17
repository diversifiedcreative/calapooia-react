import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer } from './headFoot/HeadFootComponent';
import Home from './homePage/HomePage';
import River from './riverPage/RiverPage';
import Explore from './mapPage/ExploreMapPage';
import Resources from './resourcesPage/ResourcesPage';
import TripReports from './tripsPage/TripReportsPage';
import './toolComponents/displayModules.css'
import './main.css';

function Main() {
	//this block effects a Scroll-To-Top on navigation
	const location = useLocation();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/river" element={<River />} />
					<Route path="/exploreMap" element={<Explore />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/tripReports" element={<TripReports />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default Main;
