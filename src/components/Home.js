import MapContainer from './MapContainer';
import SearchBar from './SearchBar';
import Logo from '../Logo.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src={Logo} alt="logo" className="logo"></img>
      <h1 className="title">Access Aid</h1>
      <h3>Travel aid for the differently abled</h3>
      <MapContainer />
      <SearchBar />
    </div>
  );
};
export default Home;
