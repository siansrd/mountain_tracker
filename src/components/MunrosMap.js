import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './MunrosMap.css';

class MunrosMap extends Component {

  constructor() {
    super()
    this.state = {
      lat: 57.4,
      lng: -4.6,
      zoom: 7,
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
         <Popup>
           Munro Name
         </Popup>
       </Marker>
      </Map>
    );
  }

};

export default MunrosMap;
