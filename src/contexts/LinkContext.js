import React, { useState, createContext } from 'react';

export const LinkContext = createContext({});
export function LinkProvider(props) {
  const { children } = props;
  const [setErrors] = useState(false);
  const [rows, setRows] = useState(false);
  const [loading, setLoading] = useState(false);
  const postnewUrlApi ='https://micro-url-api.herokuapp.com/api/v1/links'
  const fetchTopUrlsApi = 'https://micro-url-api.herokuapp.com/api/v1/top_urls'

  async function fetchRows() {
    const response = await fetch(fetchTopUrlsApi); 
    response.json()
      .then(res => setRows(res))
      .catch(err => setErrors(err));
  }

  function PostLink(link) {
    const data = { "url": link }
    fetch(postnewUrlApi, { method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' } })
      .then(response => response.json())
      .then(data => checkForDuplicate(data))
      .catch(error => console.error('Error:', error)
    );
  }

  function SubmitHandler(link) {
    setLoading(false)
    PostLink(link)
    sleep(1500);
    fetchRows();
  }

  function sleep(ms) {
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

  function setLoad() {
    setLoading(true)
    sleep(1500)
    setLoading(false)
  } 

  function checkForDuplicate(response) {
    if (response.status === 409) {
      alert("The URL you have submitted already exists in the system. Please try again.")
    } else {
      alert("New short URL created.")
    }
  }

  return (
    <LinkContext.Provider
      value={{
        rows,
        loading,
        setLoad,
        SubmitHandler,
        fetchRows,
        LinkContext,
        LinkProvider
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}
