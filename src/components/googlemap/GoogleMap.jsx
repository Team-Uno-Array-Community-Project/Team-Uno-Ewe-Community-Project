import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

// this class component is from the google-maps-react library.
// The Google API is not very friendly in relation to modern React code,
// leading to the extends Component seen below

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 41.14356532636469,
      lng: -104.83089559719468, 
    },
  };

  render() {
    return (
      
      <Map
      className="map"
        google={this.props.google}
        zoom={18}
        style={{width: 300, height: 400}}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
        }}
       
      ></Map>
    );
  }
}

export default GoogleApiWrapper({
  //This API key is Vlad's personal Google API key and stored in the .env file at the root level
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API__KEY,
})(MapContainer);
