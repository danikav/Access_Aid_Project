import './Business.css';

const Business = () => {
  return (
    <>
      <div className="business">
        <img className="business-image" src="https://wwwcdn.ithaca.edu/sites/default/files/styles/max_2600x2600/public/2020-08/edinburgh.jpeg?itok=t_48rAQh"></img>
        <div className="business-info">
          <h2>Title of Business</h2>
          <p>Rating: &#9733;&#9733;&#9733;&#9733;&#9734;</p>
          <p>Description of business here. This may be a few sentences long.</p>
          <ul>
              <li>Star rating here.</li>
              <li>Star rating here.</li>
              <li>Star rating here.</li>
              <li>Star rating here.</li>
              <li>Star rating here.</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Business;
