import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import BusinessListPage from './components/BusinessListPage';
import Home from './components/Home';
import MockBusinessPage from './components/BusinessPage';
import ErrorPage from './components/ErrorPage';
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
            <Route path="/businesses" component={BusinessListPage} />
            <Route path="/resources" component={Resources} />
            <Route path="/mock-business" component={MockBusinessPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
