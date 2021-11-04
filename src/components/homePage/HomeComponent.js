import React from 'react';
import { Media } from 'reactstrap';
import HeroVid from './HeroVidComponent';
import { baseUrl } from 'config';
import './home.css';

function HomeContent() {
    return(
        <div className="home-content">
            <Media className="head-card">
                <Media left className="d-none d-md-block head-img-box">
                    <Media object className="head-img" src={baseUrl + 'img/cala-river.jpg'} alt="calapooia river" />
                </Media>
                <Media body style={{padding: "0 10%"}}>
                    <Media heading>
                        To put your hands in a river is to feel the chords that bind the earth together.
                    </Media>
                    ~Barry Lopez
                </Media>
            </Media>
            <p>From remote beginnings deep in the forested folds of the old Cascades, the beautiful Calapooia River winds a meandering path through Oregon's Linn county, and through the history of the region.</p>
            <p>This website was created for the sole purpose of enhancing public understanding, appreciation, and enjoyment of the Calapooia River and it's basin.</p>
            <p>Please explore this site and, more importantly, bring the contents and resources you find here to bear as you explore and enjoy the beautiful and under-appreciated river called Calapooia.</p>
        </div>
    )
}

function Home() {
    return(
        <>
            <HeroVid />
            <HomeContent />
        </>
    );
}

export default Home;