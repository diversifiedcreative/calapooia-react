import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import River from './RiverComponent';
import MapContainer from './MapContainerComponent'
import Resources from './ResourcesComponent';
import TripReports from './TripReportsComponent';
import Guides from './GuidesComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/river' component={River} />
                    <Route path='/resources' component={Resources} />
                    <Route path='/tripReports' component={TripReports} />
                    <Route path='/guides' component={Guides} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;