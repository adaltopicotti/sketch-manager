import React, { useState } from 'react';

import './styles.css'
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer, Popup, Polygon } from 'react-leaflet';
import { latLng } from 'leaflet';

interface Point {
  lat: number;
  lng: number;
}

interface Sketch {
  point?: Point;
  latLngs: [Point];

}


function App() {
  const REACT_APP_MAPBOX_TOKEN = "pk.eyJ1IjoiYWRhbHRvcGljb3R0aSIsImEiOiJja2c3ZGpiOGowNjhhMnFteXpjMTRiYnJsIn0.J2YxTJPFJy2vXf4qDXu7XQ"
  const center = [51.505, -0.09]
  const [sketch, setSketch] = useState<Sketch>();
  // setSketch({ latLngs: [{ lat: 1, lng: 2 },] })
  // <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  return (
    <div className="App">
      <MapContainer
        center={[-23.022318456811526, -58.30784083537541]} zoom={13} scrollWheelZoom={true}
        style={{ width: '50%', height: '50%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Polygon pathOptions={{ color: 'lime' }} positions={[
          [-23.01915867698386, -58.30363513164006],
          [-23.025004279939505, -58.3031201475092],
          [-23.025478236639195, -58.31196070842228],
          [-23.019790646277645, -58.31256152324162]
        ]} />
      </MapContainer>
    </div>
  );
}

export default App;
