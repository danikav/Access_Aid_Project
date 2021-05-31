function BusinessPage() {
  return (
    <>
      <div className="business">
        <img className="business-image" src="https://wwwcdn.ithaca.edu/sites/default/files/styles/max_2600x2600/public/2020-08/edinburgh.jpeg?itok=t_48rAQh" alt="business"></img>
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

      <form method="post">
        <h4>Leave Review</h4>

        <div>
          Your name
          <br />
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          Noise level
          <br />
          <select id="rating-noise" name="rating-noise" required>
            <option selected disabled>Make a selection</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div>
          Space
          <br />
          <select id="rating-space" name="rating-space" required>
            <option selected disabled>Make a selection</option>
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

export default BusinessPage;
