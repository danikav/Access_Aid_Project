import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './LocationContainer.css';

function LocationContainer() {
  const { id } = useParams();
  const url = 'http://localhost:8080/api/locations/' + id;
  const [location, setLocation] = useState(null);
  const [locationLoaded, setLocationLoaded] = useState(false);
  const [averages, setAverages] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLocation(data));
  }, [url]);

  useEffect(() => {
    if (location && averages) {
      setLocationLoaded(true);
    }
  }, [location, averages]);

  useEffect(() => {
    if (location) {
      const metrics = ['high_light_score', 'low_noise_score', 'adequate_space', 'mobility_access', 'staff_support', 'total_score'];

      const averages = metrics
        .map((metric) => {
          const sum = location.ratings.reduce((acc, rating) => acc + rating[metric], 0);
          return [metric, sum];
        })
        .reduce((acc, [metric, sum]) => {
          return { ...acc, [metric]: sum / location.ratings.length };
        }, {});

      setAverages(averages);
    }
  }, [location]);

  if (!locationLoaded || !averages) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="location-container">
        <img className="location-container-image" src={location.picture_source} alt="location"></img>
        <div className="location-info">
          <h2>{location.name}</h2>
          <p>Rating: {averages.total_score}/5</p>
          <p>{location.description}</p>
          <ul>
            <li>Staff Support: {averages.staff_support}/5</li>
            <li>Mobility Access: {averages.mobility_access}/5</li>
            <li>Noise Level: {averages.low_noise_score}/5</li>
            <li>Light Level: {averages.high_light_score}/5</li>
            <li>Adequate Space: {averages.adequate_space}/5</li>
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
