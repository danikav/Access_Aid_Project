import { useState, useEffect } from 'react';
import BusinessListItem from './BusinessListItem';
import SearchBar from './SearchBar';

const BusinessList = () => {
  const [locations, setLocations] = useState({});
  const [locationsLoaded, setLocationsLoaded] = useState(false);

  let [BusinessListItemNode, setBusinessListItemNode] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/locations')
      .then((response) => response.json())
      .then((data) => setLocations(data));
  }, []);

  useEffect(() => {
    if (locations.length) {
      setLocationsLoaded(true);
      const node = locations.map((item) => {
        return <BusinessListItem location={item} />;
      });
      setBusinessListItemNode(node);
    }
  }, [locations]);

  return (
    <>
      <SearchBar />
      {BusinessListItemNode}
    </>
  );
};
export default BusinessList;
