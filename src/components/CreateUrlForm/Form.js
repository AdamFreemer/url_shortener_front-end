import React, { useState } from "react";



function Form(props) {
  const [link, setLink] = useState('');

  const handleSubmit = () => {
    const apiUrl ="https://micro-url-api.herokuapp.com/api/v1/links"
    const data = { "url": link }
    fetch(apiUrl, { method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' } })
      .then(res => console.log(res))
      .catch(error => console.error('Error:', error)
    ); 
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

      <button type="button" className="btn btn-lg btn-primary btn-block" onClick={handleSubmit} >Submit</button>
    </form>  
	)
}

export default Form;