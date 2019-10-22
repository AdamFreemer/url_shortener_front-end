import React, { useContext, useState } from 'react'
import validator from 'validator'
import { LinkContext } from '../../contexts/LinkContext';
import '../../style/form.css';

function Form() {
  const [link, setLink] = useState('');
  const linkContext = useContext(LinkContext);
  
  function submitClick() {
    if (validator.isURL(link)) {
      linkContext.submitLink(link);
    } else {
      alert('Invalid URL, please try again.');
    }
    setLink('');
    linkContext.fetchRows();
  }

  function submitLink(e) {
    e.preventDefault();
  }

  return (
    <div className="d-flex justify-content-center entry-form-spacing">
      <form className="form-inline" onSubmit={submitLink}>
        <div className="form-group ">
          <input 
            type="field" 
            className="form-control sm-8 mb-2" 
            id="url" 
            placeholder="Enter URL to shorten"
            value={link} 
            onChange={e => setLink(e.target.value)}
          />
        </div>
        <button 
          type="button" 
          className="btn btn-primary mx-sm-3 mb-2"
          onClick={submitClick}
          >Create Short URL
        </button>
      </form>
    </div>
  )
}

export default Form;
