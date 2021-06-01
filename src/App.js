import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import LocationListContainer from './container/LocationListContainer';
import Home from './container/HomeContainer';
import LocationContainer from './container/LocationContainer';
import ErrorPage from './container/ErrorPage';
import Resources from './components/Resources';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar className="nav-bar" />
        <div className="page-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/locations" component={LocationListContainer} />
            <Route path="/resources" component={Resources} />
            <Route path="/mock-business" component={LocationContainer} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
