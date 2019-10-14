import React, { useContext, useState } from 'react'
import validator from 'validator'
import { LinkContext } from '../../contexts/LinkContext';
import '../../style/form.css';

function Form() {
  const [link, setLink] = useState('');
  const linkContext = useContext(LinkContext);
  
  function submitClick() {
    if (validator.isURL(link)) {
      linkContext.SubmitHandler(link);
    } else {
      alert('Invalid URL, please try again.');
    }
    setLink('');
  }

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="d-flex justify-content-center entry-form-spacing">
      <form className="form-inline" onSubmit={submitHandler}>
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
          type="button" 
          className="btn btn-primary mb-2"
          onClick={submitClick}
          >Create Short URL
        </button>
      </form>
    </div>
  )
}

export default Form;