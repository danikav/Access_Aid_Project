import './ReviewForm.css';
import {useState, useEffect} from 'react';
import Rating from 'react-rating';


const ReviewForm = ({onFormSubmit, selectedLocation, users}) => {

    const [author, setAuthor] = useState(null);
    const [text, setText] = useState(""); 
    const [noise, setNoise] = useState(0); 
    const [light, setLight] = useState(0); 
    const [space, setSpace] = useState(0); 
    const [mobility, setMobility] = useState(0); 
    const [support, setSupport] = useState(0); 
    
    useEffect(() => {
        if(users.length) {
            setAuthor(users[0].id)
        }
    }, [users])

    const handleAuthorChange = (evt) => {		
        setAuthor(evt.target.value);
      }
    
      const handleTextChange = (evt) => {		
        setText(evt.target.value);
      }

      const handleNoise = (event) => {
        setNoise(event)
      }

      const handleSupport = (event) => {
        setSupport(event)
      }

      const handleMobility = (event) => {
        setMobility(event)
      }

      const handleSpace = (event) => {
        setSpace(event)
      }

      const handleLight = (event) => {
        setLight(event)
      }

      const handleFormSubmit= (evt) => {
        evt.preventDefault();
        const userIdSubmit = author;
        const trimmedText = text.trim();
        const locationSubmit = selectedLocation.id;
        const lightSubmit = light;
        const noiseSubmit = noise;
        const spaceSubmit = space;
        const mobilitySubmit = mobility;
        const supportSubmit = support;
        const date = "";
        const totalScore = (noise + space + mobility + support + light)/5;
        if (!trimmedText) {
          return
        }

        onFormSubmit({	
            date: date,					
            high_light_score: lightSubmit,
            low_noise_score: noiseSubmit,
            adequate_space: spaceSubmit,
            mobility_access: mobilitySubmit,
            staff_support: supportSubmit,
            total_score: totalScore,
            user_reviews: trimmedText,
            location: {id: locationSubmit},
            user: {id: userIdSubmit}
          });

      
        setAuthor(null);
        setText("");
        setLight(0)    
        setSupport(0)    
        setSpace(0)    
        setMobility(0)    
        setNoise(0)    
      }

    const userOptionNodes = users.map(({name, id}) => (<option value={id}>{name}</option>))
    console.log(userOptionNodes)

    return(
        <>
        <form method="post" onSubmit={handleFormSubmit}>
        <h4>Leave Review</h4>

        <div>
          Your name
          <br />
          <select required id="name" name="name" placeholder="Name" value={author} onChange={handleAuthorChange} required>
            <option selected disabled value={null}>Please select yourself</option>
            {userOptionNodes}
          </select>
        </div>
        <br />

        <div class="ratings" id="rating-light" name="rating-light">
          Light level <br />
          <Rating className="rating" initialRating={light} onClick={handleLight} stop="5" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          
        </div>

         <div class="ratings" id="rating-noise" name="rating-noise">
          Noise level <br />
          <Rating className="rating" initialRating={noise} onClick={handleNoise} stop="5" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          
        </div>

        <div class="ratings" id="rating-space" name="rating-space" >
          Space Level <br />
          <Rating className="rating" initialRating={space} onClick={handleSpace} stop="5" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          
        </div> 

        <div class="ratings" id="rating-access" name="rating-access" >
          Mobility Access <br />
          <Rating className="rating" initialRating={mobility} onClick={handleMobility} stop="5" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>
          
        </div> 

        <div class="ratings" id="rating-staff" name="rating-staff" >
          Staff Support <br />
          <Rating className="rating" initialRating={support} onClick={handleSupport} stop="5" emptySymbol={<span>&#9734;</span>} fullSymbol={<span>&#9733;</span>}/>

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