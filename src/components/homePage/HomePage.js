import React from 'react';
import HeroVid from './HeroVidComponent';
import calaRiver from 'img/cala-river.jpg';
import './home.css';

function HomeContent() {
	return (
		<div className="home-content">
			<div className="head-card row">
				<div className="d-none d-md-block col-md-5 card-img-cont">
					<img className="card-img" src={calaRiver} alt="calapooia river" />
				</div>
				<div className="card-text col col-md-7">
					<h6>To put your hands in a river is to feel the chords that bind the earth together.</h6>
					<span>~Barry Lopez</span>
				</div>
			</div>
			<div className="home-text">
				<p>
					From remote beginnings deep in the forested folds of the old Cascades, the beautiful Calapooia River winds a meandering path through the landscape of
					Oregon's Linn county, and through the history of the region.
				</p>
				<p>
					This website was created for the sole purpose of enhancing public understanding, appreciation, and enjoyment of the Calapooia River and it's
					basin.
				</p>
				<p>
					Please explore this site and, more importantly, bring the contents and resources you find here to bear as you explore and enjoy the
					beautiful and under-appreciated Calapooia River.
				</p>
			</div>
		</div>
	);
}

function Home() {
	return (
		<>
			<HeroVid />
			<HomeContent />
		</>
	);
}

export default Home;
