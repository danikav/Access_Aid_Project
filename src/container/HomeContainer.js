import { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import SearchBar from '../components/SearchBar';
import Logo from '../Logo.png';
import './Home.css';

const Home = ({locations, locationsLoaded}) => {
  // const [locations, setLocations] = useState({});
  // const [locationsLoaded, setLocationsLoaded] = useState(false);

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/locations')
  //     .then((response) => response.json())
  //     .then((data) => setLocations(data))
  // }, []);

  // useEffect(() => {
  //   if (locations.length) {
  //     setLocationsLoaded(true)
  //   }
  // }, [locations])

  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filterLocations = (searchTerm) => {
    setFilteredLocations(locations.filter(location => {
      return location.type.toLowerCase().includes(searchTerm.trim().toLowerCase())
    }))
  };

  useEffect(() => {
    filterLocations(searchTerm)
  }, [searchTerm, locations])

  return (
    <div className="home-container">
      <img src={Logo} alt="logo" className="logo"></img>
      <h1 className="title">Access Aid</h1>
      <h3>Travel aid for the differently abled</h3>
      <SearchBar handleSubmit={setSearchTerm} />
      <MapComponent locations={filteredLocations} locationsLoaded={locationsLoaded} />
    </div>
  );
};
export default Home;
