import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MapContainer from './components/MapContainer';
import NavBar from './components/NavBar';
import Business from './components/Business';
import SearchBar from './components/SearchBar';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Resources from './components/Resources'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <SearchBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/businesses" component={Business} />
        <Route path="/resources" component={Resources}/>
        <Route component={ErrorPage} />
      </Switch>
    </Router>
    <MapContainer />
    </>
  );
}

export default App;
