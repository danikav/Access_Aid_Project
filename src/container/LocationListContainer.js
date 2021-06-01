import { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LocationListItem from '../components/LocationListItem';
import SearchBar from '../components/SearchBar';

const LocationList = ({ locations, locationsLoaded }) => {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filterLocations = (searchTerm) => {
    setFilteredLocations(
      locations.filter((location) => {
        return location.type.toLowerCase().includes(searchTerm.trim().toLowerCase());
      })
    );
  };

  useEffect(() => {
    filterLocations(searchTerm);
  }, [searchTerm, locations]);

  const locationListItemNode = filteredLocations.map((item) => {
    const link = '/location/' + item.id;

    return (
      <Link to={link}>
        <LocationListItem location={item} key={item.id}></LocationListItem>
      </Link>
    );
  });

  return (
    <>
      <SearchBar handleSubmit={setSearchTerm} />
      {locationListItemNode}
    </>
  );
};

export default LocationList;
