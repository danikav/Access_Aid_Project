import { useState, useEffect } from 'react';
import BusinessListItem from './BusinessListItem';
import SearchBar from './SearchBar';


const BusinessList = () => {

  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [locations, setLocations] = useState({});
  const [locationsLoaded, setLocationsLoaded] = useState(false);

  let [BusinessListItemNode, setBusinessListItemNode] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8080/api/locations')
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
        setBusinesses(data); 
        setFilteredBusinesses(data)});
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

  const filterBusinesses = (formSubmitValue) => {
    setFilteredBusinesses(businesses.filter(business => {
      return business.type.includes(formSubmitValue)



      
    }))
  }; 


  return (
    <>
      <SearchBar handleChange={(formSubmitValue) => filterBusinesses(formSubmitValue)} />
      {BusinessListItemNode}
      </>

  );
  }


export default BusinessList;