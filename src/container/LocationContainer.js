import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function LocationContainer() {
  const { id } = useParams();
  const url = 'http://localhost:8080/api/locations/' + id;
  const [location, setLocation] = useState({});
  const [locationsLoaded, setLocationsLoaded] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLocation(data));
  }, [url]);

  useEffect(() => {
    if (location.length) {
      setLocationsLoaded(true);

      let staff_support = 0;
    let mobility_access = 0;
    let low_noise_score = 0;
    let high_light_score = 0;
    let adequate_space = 0;
    let total_score = 0;
    location.ratings.forEach((rating) => {
      staff_support += rating.staff_support;
      mobility_access += rating.mobility_access;
      low_noise_score += rating.low_noise_score;
      high_light_score += rating.high_light_score;
      adequate_space += rating.adequate_space;
      total_score += rating.total_score;
    });
    staff_support = staff_support / location.ratings.length;
    mobility_access = mobility_access / location.ratings.length;
    low_noise_score = low_noise_score / location.ratings.length;
    high_light_score = high_light_score / location.ratings.length;
    adequate_space = adequate_space / location.ratings.length;
    total_score = total_score / location.ratings.length;
    }
    
  }, [location]);

  return (
    <>
      <div className="location">
        <img className="location-image" src={location.picture_source} alt="location"></img>
        <div className="location-info">
          <h2>{location.name}</h2>
          <p>Rating: &#9733;&#9733;&#9733;&#9733;&#9734;</p>
          <p>{location.description}</p>
          <ul>
            <li>Star rating here.</li>
            <li>Star rating here.</li>
            <li>Star rating here.</li>
            <li>Star rating here.</li>
            <li>Star rating here.</li>
          </ul>
        </div>
      </div>

      <form method="post">
        <h4>Leave Review</h4>

        <div>
          Your name
          <br />
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          Light level
          <br />
          <select id="rating-light" name="rating-light" required>
            <option selected disabled>
              Make a selection
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div>
          Noise level
          <br />
          <select id="rating-noise" name="rating-noise" required>
            <option selected disabled>
              Make a selection
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div>
          Space availability
          <br />
          <select id="rating-space" name="rating-space" required>
            <option selected disabled>
              Make a selection
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div>
          Mobility access
          <br />
          <select id="rating-access" name="rating-access" required>
            <option selected disabled>
              Make a selection
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div>
          Staff support
          <br />
          <select id="rating-staff" name="rating-staff" required>
            <option selected disabled>
              Make a selection
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div>
          Review
          <br />
          <textarea id="review-text" name="review-text" rows="9" required></textarea>
        </div>

        <div>
          <input name="skip_Submit" value="Submit" type="submit" />
        </div>
      </form>
    </>
  );
}

export default LocationContainer;
