import BusinessListItem from './BusinessListItem';
import SearchBar from './SearchBar';
import {useState, useEffect} from 'react';


const BusinessList = () => {

  const [businesses, setBusinesses] = useState([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/locations")
      .then(res => res.json())
      .then((data) => {setBusinesses(data); setFilteredBusinesses(data);
        }, []);
      })
      

  const searchBusinesses = (searchBusiness) => {
    let foundBusinesses = [];
    businesses.forEach((business) => {
      if (business.type.includes(searchBusiness)) {
        foundBusinesses.push(business);
      }
    });
    setFilteredBusinesses(foundBusinesses);
    return filteredBusinesses
  }; 


  return (
    <>
      <SearchBar handleChange={searchBusinesses}/>
      <BusinessListItem />
      <BusinessListItem />
      <BusinessListItem />
      <BusinessListItem />
    </>
  );
  }


export default BusinessList;
