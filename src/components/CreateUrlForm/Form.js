import React, { useContext, useState } from "react"
import { LinkContext } from "../../contexts/LinkContext";
import '../../style/form.css';

function Form() {
  const [link, setLink] = useState('');
  const linkContext = useContext(LinkContext);


  function submitClick() {
    linkContext.SubmitHandler(link);
  }
 
	return (
    
    <div className="d-flex justify-content-center">
      <form className="form-inline">

        <div className="form-group mx-sm-3 mb-2">
          <input 
            type="field" 
            style={{width: 500}}
            className="form-control" 
            id="url" 
            placeholder="Enter URL to shorten"
            value={link} 
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary mb-2"
          onClick={submitClick}
          >{linkContext.submit}
        </button>
      </form>
    </div>
	)
}

export default Form;