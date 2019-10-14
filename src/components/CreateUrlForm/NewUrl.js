import React, { useContext } from 'react'
import { LinkContext } from '../../contexts/LinkContext';
import '../../style/form.css';

function NewUrl() {
  const linkContext = useContext(LinkContext);
  
  if (!linkContext.showNewUrl) { return <div></div> }

  return (
    <div className="d-flex justify-content-center new-url">
      New short URL:&nbsp;<a href={linkContext.newUrl} target="_blank" rel="noopener noreferrer">{linkContext.newUrl}</a>
    </div> 
  )
}

export default NewUrl;
