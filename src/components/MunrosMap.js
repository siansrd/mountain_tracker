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

  createMarkers() {
    return this.props.munrosData.map(munro => (
      <Marker
      position={[munro.latlng_lat, munro.latlng_lng]} key={munro.smcid}>
       <Popup>
         {munro.name}
       </Popup>
     </Marker>
    ))
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {this.createMarkers()}
      </Map>
    );
  }

};

export default MunrosMap;
