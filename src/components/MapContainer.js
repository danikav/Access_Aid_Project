import { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import PopUp from './PopUp';

const MapContainer = () => {
  const [popUpWindow, setPopUpWindow] = useState(false);

  const togglePop = () => {
    setPopUpWindow(true);
  };

  return (
    <>
      <h1>Map</h1>
      <Map height={300} defaultCenter={[55.9467749, -3.2020009]} defaultZoom={11}>
        <Marker width={50} anchor={[55.9467749, -3.2020009]} onClick={togglePop}/>
        <Marker width={50} anchor={[55.4467749, -3.2020009]} />
        {/* <p>hello</p> */}
      </Map>
      {popUpWindow ? <PopUp toggle={togglePop}></PopUp> : null}
    </>
  );
};
export default MapContainer;
