import './ReviewForm.css';
const ReviewForm = () => {

    return(
        <>
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
          <input id="submit" name="skip_Submit" value="Submit" type="submit" />
        </div>
      </form>
        </>
    )
}
export default ReviewForm;