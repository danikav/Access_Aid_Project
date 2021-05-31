import './PopUp.css';

const Popup = ({ toggle, location }) => {
  return (
    <div className="popup-container">
      <button className="close-button" onClick={toggle}></button>
      <div className="business-text">
        <h1>{location.name}</h1>
        <p>Information about business</p>
        <ul>
          <li>information</li>
        </ul>
      </div>
    </div>
  );
};

export default Popup;
