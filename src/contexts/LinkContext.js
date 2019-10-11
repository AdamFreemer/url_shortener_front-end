import React, { useState, createContext } from 'react';

export const LinkContext = createContext({});

export function LinkProvider(props) {
  const { children } = props;
  const [state, setState] = useState({});


  function PostLink(value) {
    console.log('== called PostApi from LinkContext!')
    // const handleSubmit = () => {
    //   const apiUrl ="https://micro-url-api.herokuapp.com/api/v1/links"
    //   const data = { "url": link }
    //   fetch(apiUrl, { method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: { 'Content-Type': 'application/json' } })
    //     .then(res => console.log(res))
    //     .catch(error => console.error('Error:', error)
    //   ); 
    // }
  }

  return (
    <LinkContext.Provider
      value={{
        LinkContext,
        LinkProvider,
        PostLink
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}
