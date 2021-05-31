import { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import PopUp from './PopUp';
import './Map.css';

const MapContainer = ({locations, locationsLoaded}) => {
  const [popUpWindow, setPopUpWindow] = useState(false);

  if (!locationsLoaded) {
    return <p>loading data...</p>
  }

  const latitude = locations[0].latitude
  const longitude = locations[0].longitude
  const cordenients = [latitude, longitude]

  const togglePop = () => {
    setPopUpWindow(!popUpWindow);
  };

  return (
    <div className="map-container">
      <Map className="map" defaultCenter={[55.9467749, -3.2020009]} defaultZoom={11}>
        <Marker width={50} anchor={[55.9367749, -3.2020009]} onClick={togglePop} />
      </Map>
      {popUpWindow ? <PopUp className="popup" toggle={togglePop}></PopUp> : null}
    </div>
  );
};
export default MapContainer;
