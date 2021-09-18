import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCOvUaRzb0eiFrC93f9_JbPB7jMUmuHjwc')
})(MapContainer);