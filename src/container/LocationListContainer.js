import { useState, useEffect } from 'react';
import BusinessListItem from '../components/LocationListItem';
import SearchBar from '../components/SearchBar';


const BusinessList = ({locations, locationsLoaded}) => {

  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const [locations, setLocations] = useState({});
  // const [locationsLoaded, setLocationsLoaded] = useState(false);

  // let [BusinessListItemNode, setBusinessListItemNode] = useState([]);


  // useEffect(() => {
  //   fetch('http://localhost:8080/api/locations')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLocations(data);
  //       setBusinesses(data); 
  //       setFilteredBusinesses(data)});
  // }, []);

  // useEffect(() => {
  //   if (locations.length) {
  //     const node = locations.map((item) => {
  //       return <BusinessListItem location={item} />;
  //     });
  //     setBusinessListItemNode(node);
  //   }
  // }, [locations]);

  const filterBusinesses = (formSubmitValue) => {
    setFilteredBusinesses(businesses.filter(business => {
      return business.type.includes(formSubmitValue)



      
    }))
  }; 

  const businessListItemNode = locations.map((item) => {
    return <BusinessListItem location={item} />;
  });


  return (
    <>
      <SearchBar handleChange={(formSubmitValue) => filterBusinesses(formSubmitValue)} />
      {businessListItemNode}
      </>

  );
  }


export default BusinessList;
