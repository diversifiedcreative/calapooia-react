import React, { Component } from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
    render() {
        return (
            <div className="mapContainer" >
                <Map
                    google={this.props.google}
                    className={"map"}
                />
            </div>
        )
    }
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyCOvUaRzb0eiFrC93f9_JbPB7jMUmuHjwc"
})(MapContainer);

// Notes: had to manually enable maps api--caused an "oops something went wrong error"