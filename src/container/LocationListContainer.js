import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import LocationListItem from '../components/LocationListItem';
import SearchBar from '../components/SearchBar';

const LocationList = ({ locations, locationsLoaded }) => {
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [refinementTerm, setRefinementTerm] = useState([]);

  const filterLocations = (searchTerm) => {
    setFilteredLocations(
      locations
        .filter((location) => {
          let foundLocation = location.type.toLowerCase().includes(searchTerm.trim().toLowerCase());
          if (!foundLocation) {
            foundLocation = location.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
          }
          return foundLocation;
        })
        .filter((location) => {
          return !refinementTerm.some((refinement) => {
            return (
              location.ratings.reduce((sumRating, rating) => {
                return sumRating + rating[refinement];
              }, 0) /
                location.ratings.length <
              3
            );
          });
        })
    );
  };

  useEffect(() => {
    filterLocations(searchTerm);
  }, [searchTerm, refinementTerm, locations]);

  const handleSearchSubmit = (searchTerm, refinementValues) => {
    setSearchTerm(searchTerm);
    setRefinementTerm(refinementValues);
  };

  const locationListItemNode = filteredLocations.map((item) => {
    const url = '/location/' + item.id;

    return (
      <Link to={url} key={item.id}>
        <LocationListItem location={item}></LocationListItem>
      </Link>
    );
  });

  return (
    <>
      <SearchBar handleSubmit={handleSearchSubmit} />
      {locationListItemNode}
    </>
  );
};

export default LocationList;
