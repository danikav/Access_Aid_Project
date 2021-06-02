import './ReviewForm.css';
import {useState} from 'react';
import Rating from 'react-rating';

const ReviewForm = ({onFormSubmit}) => {

    const [author, setAuthor] = useState("");
    const [text, setText] = useState(""); 

    const handleAuthorChange = (evt) => {		
        setAuthor(evt.target.value);
      }
    
      const handleTextChange = (evt) => {		
        setText(evt.target.value);
      }

      const handleFormSubmit= (evt) => {
        evt.preventDefault();
        const trimmedAuthor = author.trim();
        const trimmedText = text.trim();
        if (!trimmedText || !trimmedAuthor) {
          return
        }

        onFormSubmit({						
            author: trimmedAuthor,
            text: trimmedText			
          });
      
        setAuthor("");
        setText("");    
      }

    return(
        <>
        <form method="post" onSubmit={handleFormSubmit}>
        <h4>Leave Review</h4>

        <div>
          Your name
          <br />
          <input type="text" id="name" name="name" placeholder="Name" value={author} onChange={handleAuthorChange} required />
        </div>
        <br />

        <div class="ratings" id="rating-light" name="rating-light">
          Light level <br />
          <Rating start="0" stop="5" step="1" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          {/* <br />
          <label>One
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>

        <label>Two
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Three
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Four
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <br />
          <label>Five
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label> */}

        </div>

         <div class="ratings" id="rating-noise" name="rating-noise">
          Noise level <br />
          <Rating start="0" stop="5" step="1" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          {/* <br />
          <label>One
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>

        <label>Two
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Three
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Four
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <br />
          <label>Five
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>
*/}
        </div>

        <div class="ratings" id="rating-space" name="rating-space" >
          Space Level <br />
          <Rating start="0" stop="5" step="1" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          {/* <br />
          <label>One
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>

        <label>Two
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Three
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Four
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <br />
          <label>Five
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>
*/}
        </div> 

        <div class="ratings" id="rating-access" name="rating-access" >
          Mobility Access <br />
          <Rating start="0" stop="5" step="1" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          {/* <br />
          <label>One
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>

        <label>Two
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Three
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Four
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <br />
          <label>Five
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>
*/}
        </div> 

        <div class="ratings" id="rating-staff" name="rating-staff" >
          Staff Support <br />
          <Rating start="0" stop="5" step="1" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          {/* <br />
          <label>One
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>

        <label>Two
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Three
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <label>Four
        <input type="radio" name="radio" />
        <span class="checkmark"></span>
        </label>

        <br />
          <label>Five
         <input type="radio" name="radio" />
         <span class="checkmark"></span>
         </label>*/}

     </div> 

        <div>
          Review
          <br />
          <textarea id="review-text" name="review-text" rows="9" value={text} onChange={handleTextChange} required></textarea>
        </div>

        <div>
          <input id="submit" name="skip_Submit" value="Submit" type="submit" />
        </div>
      </form>
        </>
    )
}
export default ReviewForm;