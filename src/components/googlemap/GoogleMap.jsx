import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

// require("dotenv").config();




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
        style={{width: 500, height: 500, position: 'relative'}}
        initialCenter={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng,
        }}
       
      ></Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCQTi7UtYqHKl0zztOio5iPv0zFPZ4bAWo",
})(MapContainer);
