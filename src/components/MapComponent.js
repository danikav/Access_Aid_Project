import { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import MapPopUp from './MapPopUp';
import './MapComponent.css';

const MapComponent = ({ locations, locationsLoaded }) => {
  const [popUpWindow, setPopUpWindow] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(0);

  if (!locationsLoaded) {
    return <p>Connecting to map data...</p>;
  }

  const togglePop = () => {
    setPopUpWindow(!popUpWindow);
  };

  const getId = (id) => {
    const foundLocation = locations.find((location) => location.id === id);
    setSelectedMarker(foundLocation);
    if (popUpWindow === false) {
      togglePop();
    }
  };

  const MarkerNode = locations.map((location) => {
    const latitude = location.latitude;
    const longitude = location.longitude;
    const coordinates = [longitude, latitude];

    return <Marker width={45} anchor={coordinates} onClick={() => getId(location.id)} key={location.id} color="#3717A0" className="marker" />;
  });

  return (
    <div className="map-container">
      <Map className="map" defaultCenter={[55.9467749, -3.2020009]} defaultZoom={13}>
        {MarkerNode}
        {popUpWindow ? <MapPopUp className="popup" toggle={togglePop} location={selectedMarker}></MapPopUp> : null}
      </Map>
    </div>
  );
};
export default MapComponent;
