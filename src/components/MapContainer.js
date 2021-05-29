import { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import PopUp from './PopUp';
import './Map.css';

const MapContainer = () => {
  const [popUpWindow, setPopUpWindow] = useState(false);

  const togglePop = () => {
    setPopUpWindow(!popUpWindow);
  };

  return (
    <div className="map-container">
      <Map className="map" defaultCenter={[55.9467749, -3.2020009]} defaultZoom={11}>
        <Marker width={50} anchor={[55.9467749, -3.2020009]} onClick={togglePop} />
        <Marker width={50} anchor={[55.9367749, -3.2020009]} onClick={togglePop} />
        {/* <p>hello</p> */}
      </Map>
      {popUpWindow ? <PopUp className="popup" toggle={togglePop}></PopUp> : null}
    </div>
  );
};
export default MapContainer;
