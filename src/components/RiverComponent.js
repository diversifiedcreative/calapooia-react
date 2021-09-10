import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class River extends Component {

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCOvUaRzb0eiFrC93f9_JbPB7jMUmuHjwc" }}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default River;