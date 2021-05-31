import './SearchBar.css'

const SearchBar = () => {

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
          <select class="refinements">
    <option value="" disabled selected>Choose Refinements</option>
    <option value="1">Visual Impairment</option>
    <option value="2">Physical Impairment</option>
    <option value="3">Example</option>
    <option value="4">Example1</option>
    <option value="5">Example2</option>
  </select>
          <button type="submit" class="searchbutton">Search</button>
          </form>
          </>
        );
      }
     
    export default SearchBar; 