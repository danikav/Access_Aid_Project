import StyledSelectSearch from './StyledSelectSearch';
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ handleSubmit }) => {
  const [formSubmitValue, setFormSubmitValue] = useState('');
  const [refinementValue, setRefinementValue] = useState([])

  const options = [
    { name: 'Low noise level', value: 'low_noise_score' },
    { name: 'High light level', value: 'high_light_score' },
    { name: 'Adequate space', value: 'adequate_space' },
    { name: 'Mobility Access', value: 'mobility_access' },
    { name: 'Staff support', value: 'staff_support' },
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(formSubmitValue, refinementValue);
    // setFormSubmitValue('');
    // setRefinementValue([]);
  };

  const changeSearchTerm = (event) => {
    setFormSubmitValue(event.target.value);
  };

  const changeRefinements = (values) => {
    setRefinementValue(values);
  }

  return (
    <>
      <form className="formcontainer" onSubmit={onSubmit}>
        <input value={formSubmitValue} className="searchbar" placeholder={'What are you looking for?'} onChange={changeSearchTerm} />

        <div className="refinements">
          <StyledSelectSearch options={options} closeOnSelect={false} id="dropdown" placeholder="Choose Refinements" multiple="true" printOptions="on-focus" value={refinementValue} onChange={changeRefinements}/>
        </div>

        <button type="submit" className="searchbutton">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
