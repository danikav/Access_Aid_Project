import './NavBar.css';
import { Link, useHistory } from "react-router-dom";


const NavBar = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

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
        <button onClick={goBack}>Back</button>
      </li>
    </ul>
    </div>
  );
}

export default NavBar;