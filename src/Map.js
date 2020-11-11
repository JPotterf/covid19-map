import React from "react";
import { Map as LeafletMap, TileLayer, GeoJSON } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "./util";
import countries_map from './countries.json';


function Map({ countries, casesType, center, zoom }) {


  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom} minZoom={2} maxZoom={5} maxBounds={[[-90,-210],   [90,210]]  } maxBoundsViscosity={1}>
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON className='geojson'
          data={countries_map}
          
          // style={this.geoJSONStyle}
          // onEachFeature={this.onEachFeature}
        />

        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default Map;
