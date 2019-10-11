import React, { useContext, useState } from "react"
import { LinkContext } from "../../contexts/LinkContext";


function Form(props) {
  const [link, setLink] = useState('');
  const [, setState] = useContext(LinkContext);
  const { LinkContextLocal } = useContext(LinkContext);

  function submitClick() {
    console.log('== submitClick in Form.js')
    setState(state => ({ ...state, link: link }));
    // LinkContextLocal.PostLink();
  }

	return (
    <form className="form-signin">
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Micro URL Shortener</h1>
        <p>Enter a URL to shorten.</p>
      </div>

      <div className="form-label-group">
        <input 
          type="field" 
          id="url" 
          value={link} 
          className="form-control" 
          placeholder="Url to Shorten" 
          onChange={e => setLink(e.target.value)}
        />
      </div>

      <button type="button" className="btn btn-lg btn-primary btn-block" onClick={submitClick} >Submit</button>
    </form>  
	)
}

export default Form;