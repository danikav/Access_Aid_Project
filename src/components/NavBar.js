import './NavBar.css';
import { Link, useHistory } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/businesses">Businesses</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/mock-business">Mock Business</Link>
        </li>
        <li className="account">Account</li>
      </ul>
    </div>
  );
};

export default NavBar;