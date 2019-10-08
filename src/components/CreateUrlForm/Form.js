import React from "react";

function Form(props) {
	return (
    <form className="form-signin">
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Micro URL Shortener</h1>
        <p>Enter a URL to shorten.</p>
      </div>

      <div className="form-label-group">
        <input type="field" id="url" className="form-control" placeholder="Url to Shorten" />
        <label>Url</label>
      </div>

      <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
    </form>  
	)
}

export default Form;