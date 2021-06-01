import { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import SearchBar from '../components/SearchBar';
import Logo from '../Logo.png';
import './Home.css';

const Home = ({ locations, locationsLoaded }) => {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [refinementTerm, setRefinementTerm] = useState([])

  const filterLocations = (searchTerm) => {
    setFilteredLocations(
      locations.filter((location) => {
        return location.type.toLowerCase().includes(searchTerm.trim().toLowerCase());
      }).filter((location) => {
        return !refinementTerm.some(refinement => { 
          return (location.ratings.reduce((sumRating, rating) => {
            return sumRating + rating[refinement]
          }, 0) / location.ratings.length) < 3
        })
      })
    );
  };

  useEffect(() => {
    filterLocations(searchTerm);
  }, [searchTerm, refinementTerm, locations]);

  const handleSearchSubmit = (searchTerm, refinementValues) => {
    setSearchTerm(searchTerm)
    setRefinementTerm(refinementValues)
  }

  return (
    <div className="home-container">
      <img src={Logo} alt="logo" className="logo"></img>
      <h1 className="title">Access Aid</h1>
      <h3>Travel aid for the differently abled</h3>
      <SearchBar handleSubmit={handleSearchSubmit} />
      <MapComponent locations={filteredLocations} locationsLoaded={locationsLoaded} />
    </div>
  );
};
export default Home;
