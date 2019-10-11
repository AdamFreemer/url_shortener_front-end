import React, { useContext, useState } from "react"
import { LinkContext } from "../../contexts/LinkContext";

function postLink() {
  const [link, setLink] = useState('');
  const [, setState] = useContext(LinkContext);
  const apiUrl ="https://micro-url-api.herokuapp.com/api/v1/links"
  const data = { "url": link }
  fetch(apiUrl, { method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' } })
    .then(res => console.log(res))
    .catch(error => console.error('Error:', error)
  ); 
}



export { Api, postLink };