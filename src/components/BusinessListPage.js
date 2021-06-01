import BusinessListItem from './BusinessListItem';
import SearchBar from './SearchBar';
import {useState, useEffect} from 'react';


const BusinessList = () => {

  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/locations")
      .then(res => res.json())
      .then((data) => {
        setBusinesses(data); 
        setFilteredBusinesses(data);
      });
      }, [])

  
  const filterBusinesses = (formSubmitValue) => {
    setFilteredBusinesses(businesses.filter(business => {
      return business.type.includes(formSubmitValue)



      
    }))
  }; 


  return (
    <>
      <SearchBar handleChange={(formSubmitValue) => filterBusinesses(formSubmitValue)} />
      <BusinessListItem />
      <BusinessListItem />
      <BusinessListItem />
      <BusinessListItem />
    </>
  );
  }


export default BusinessList;
