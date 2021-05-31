function BusinessPage() {
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
      <form className="review-form" method="post">
        <input type="text"></input>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <div class="rating">
          <span>
            <input type="radio" name="rating" id="str5" value="5" />
            <label for="str5"></label>
          </span>
          <span>
            <input type="radio" name="rating" id="str4" value="4" />
            <label for="str4"></label>
          </span>
          <span>
            <input type="radio" name="rating" id="str3" value="3" />
            <label for="str3"></label>
          </span>
          <span>
            <input type="radio" name="rating" id="str2" value="2" />
            <label for="str2"></label>
          </span>
          <span>
            <input type="radio" name="rating" id="str1" value="1" />
            <label for="str1"></label>
          </span>
        </div>
        <input type="submit" value="submit"></input>
      </form>
    </>
  );
}

export default BusinessPage;
