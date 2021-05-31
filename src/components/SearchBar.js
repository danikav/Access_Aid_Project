import StyledSelectSearch from './StyledSelectSearch'
import './SearchBar.css'

const SearchBar = ({handleChange}) => {

  const options = [
    {name: 'Low noise level', value: 'nl'},
    {name: 'High light level', value: 'll'},
    {name: 'Adequate space', value: 'as'},
    {name: 'Mobility Access', value: 'ma'},
    {name: 'Staff support', value: 'ss'}
  ]

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
          <>
          <form class="formcontainer">
            <input 
            key="random1"
            class="searchbar"
            placeholder={"What are you looking for?"}
            />
          
            <div class="refinements"><StyledSelectSearch options={options} closeOnSelect={false} id="dropdown" placeholder="Choose Refinements" multiple="true" printOptions="on-focus"/> </div>
      
            <button type="submit" onClick={handleChange} onSubmit={handleSubmit} class="searchbutton">Search</button>
          </form>
          </>
        );
      }
    
     
    export default SearchBar; 