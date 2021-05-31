import SelectSearch from 'react-select-search';
import './SearchBar.css'

const SearchBar = () => {

  const options = [
    {name: 'Example1', value: 'sv'},
    {name: 'Example2', value: 'en'},
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
         
          <div class="refinements"><SelectSearch options={options} value="sv" name="refinements" placeholder="Choose Refinements" /> </div>
    
          <button type="submit" class="searchbutton">Search</button>
          </form>
          </>
        );
      }
    
     
    export default SearchBar; 