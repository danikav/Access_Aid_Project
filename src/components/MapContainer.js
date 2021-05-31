import { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import PopUp from './PopUp';
import './Map.css';

const MapContainer = ({ locations, locationsLoaded }) => {
  const [popUpWindow, setPopUpWindow] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(0);



  if (!locationsLoaded) {
    return <p>Connecting to map data...</p>;
  }

  const togglePop = () => {
    setPopUpWindow(!popUpWindow);
  };

  const getId = (id) => {
    console.log(id);
    const foundLocation = locations.find(location => location.id === id);
    setSelectedMarker(foundLocation)
    togglePop();
  }

  const MarkerNode = locations.map((location) => {
    const latitude = location.latitude;
    const longitude = location.longitude;
    const coordinates = [longitude, latitude];

    return <Marker width={30} anchor={coordinates} onClick={() => getId(location.id)} key={location.id} />;
  });

  return (
    <div className="map-container">
      <Map className="map" defaultCenter={[55.9467749, -3.2020009]} defaultZoom={13}>
        {MarkerNode}
      </Map>
      {popUpWindow ? <PopUp className="popup" toggle={togglePop} location={selectedMarker}></PopUp> : null}
    </div>
  );
};
export default MapContainer;
