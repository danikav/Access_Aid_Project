import MapContainer from './MapContainer';
import SearchBar from './SearchBar';
import './Home.css'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Access Aid</h1>
      <h3>Travel aid for the differently abled</h3>
      <MapContainer />
      <SearchBar />
    </div>
  );
};
export default Home;
