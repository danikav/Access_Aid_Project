import SelectSearch from 'react-select-search';
import './SearchBar.css'

const SearchBar = () => {

  const options = [
    {name: 'Low noise level', value: 'nl'},
    {name: 'High light level', value: 'll'},
    {name: 'Adequate space', value: 'as'},
    {name: 'Mobility Access', value: 'ma'},
    {name: 'Staff support', value: 'ss'}
  ]

  const BarStyling = {width:"20rem",background:"#F2F1F9", padding:"0.5rem"};
  return (
          <>
          <form class="formcontainer">
          <input 
           style={BarStyling}
           key="random1"
           class="searchbar"
        //    value={keyword}
           placeholder={"What are you looking for?"}
        //    onChange={(e) => setKeyword(e.target.value)}
          />
         
          <div class="refinements"><SelectSearch options={options} id="dropdown" placeholder="Choose Refinements" multiple="true" printOptions="on-focus"/> </div>
    
          <button type="submit" class="searchbutton">Search</button>
          </form>
          </>
        );
      }
    
     
    export default SearchBar; 