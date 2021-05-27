import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Map from './components/Map';
import NavBar from './components/NavBar';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Home from "./components/Home";
import ErrorPage from './components/ErrorPage';
import Resources from './components/Resources'
import './App.css';

function App() {
  return (
    <Router>
    <>
    <NavBar />
    <SearchBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/businesses" component={BusinessList} />
        <Route
          path="/resources" component={Resources}
        />
        <Route component={ErrorPage}/>
        </Switch>
        </>
    </Router>
  );
}

export default App;
