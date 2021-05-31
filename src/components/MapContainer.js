import { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import PopUp from './PopUp';
import './Map.css';

const MapContainer = ({ locations, locationsLoaded }) => {
  const [popUpWindow, setPopUpWindow] = useState(false);
  const [slecetedMarker, setSlecetedMarker] = useState(0);

  if (!locationsLoaded) {
    return <p>Connecting to map data...</p>;
  }

  const togglePop = (id) => {
    setPopUpWindow(!popUpWindow);
  };

  const MarkerNode = locations.map((location) => {
    const latitude = location.latitude;
    const longitude = location.longitude;
    const coordinates = [longitude, latitude];

    return <Marker width={30} anchor={coordinates} onClick={togglePop} key={location.id} />;
  });

  return (
    <div className="map-container">
      <Map className="map" defaultCenter={[55.9467749, -3.2020009]} defaultZoom={11}>
        {MarkerNode}
      </Map>
      {popUpWindow ? <PopUp className="popup" toggle={togglePop}></PopUp> : null}
    </div>
  );
};
export default MapContainer;
