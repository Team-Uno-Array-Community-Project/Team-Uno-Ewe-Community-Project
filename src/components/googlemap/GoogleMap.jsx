import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

// this class component is from the google-maps-react library.
// The Google API is not react friendly so this is a hacky way of getting it to render here.

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter: {
      lat: 41.14364134363971,
      lng: -104.8304492888749,
    },
  };

  render() {
    return (
      
      <Map
      className="map"
        google={this.props.google}
        zoom={18}
        style={{width: 500, height: 500, position: 'relative', margin:"2%", padding:"2%", bottom:"2%"}}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
        }}
       
      ></Map>
    );
  }
}

export default GoogleApiWrapper({
  //This API key is Vlad's personal API key and stored in the .env file at the root level
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API__KEY,
})(MapContainer);
