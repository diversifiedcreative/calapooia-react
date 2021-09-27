import React from 'react';
import { Media } from 'reactstrap';
import HeroVid from './HeroVidComponent';
import './home.css';

function HomeContent() {
    return(
        <div className="home-content">
            <Media style={{alignItems: "center"}}>
                <Media left className="d-none d-sm-block">
                    <Media object src="img/cala-river.jpg" alt="calapooia river" height="200px" visibility="hidden"/>
                </Media>
                <Media body style={{padding: "0 10%"}}>
                    <Media heading>
                        To put your hands in a river is to feel the chords that bind the earth together.
                    </Media>
                    ~Barry Lopez
                </Media>
            </Media>
            <p>From remote beginnings deep in the forest folds of the old Cascades, the beautiful Calapooia River winds a meandering path through Oregon's Linn county, and through the history of the region.</p>
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