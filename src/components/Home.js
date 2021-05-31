import { useState, useEffect } from 'react';
import MapContainer from './MapContainer';
import SearchBar from './SearchBar';
import Logo from '../Logo.png';
import './Home.css';

const Home = () => {
  const [locations, setLocations] = useState({});
  const [locationsLoaded, setLocationsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/api/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data))
  }, []);

  useEffect(() => {
    if (locations.length) {
      setLocationsLoaded(true)
    }
  }, [locations])

  return (
    <div className="home-container">
      <img src={Logo} alt="logo" className="logo"></img>
      <h1 className="title">Access Aid</h1>
      <h3>Travel aid for the differently abled</h3>
      <MapContainer locations={locations} locationsLoaded={locationsLoaded} />
      <SearchBar />
    </div>
  );
};
export default Home;
