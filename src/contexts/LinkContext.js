import React, { useState, createContext } from 'react';

export const LinkContext = createContext({});
export function LinkProvider(props) {
  const { children } = props;
  const [, setErrors] = useState(false);
  const [rows, setRows] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNewUrl, setShowNewUrl] = useState(false);
  const [newUrl, setNewUrl] = useState('')
  const postnewUrlApi ='https://micro-url-api.herokuapp.com/api/v1/links'
  const fetchTopUrlsApi = 'https://micro-url-api.herokuapp.com/api/v1/top_urls'
  const jobCompletionApi = 'https://micro-url-api.herokuapp.com/api/v1/busy'

  async function fetchRows() {
    const response = await fetch(fetchTopUrlsApi); 
    response.json()
      .then(res => setRows(res))
      .catch(err => setErrors(err));
  }

  function submitLink(link) {
    postLink(link);
    pollForJobCompletion();
  }

  async function postLink(link) {
    setLoading(true)
     const data = { "url": link }
     await fetch(postnewUrlApi, { method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' } })
      .then(response => response.json())
      .then(data => checkForDuplicate(data))
      .catch(error => console.error('Error:', error)
    );
  }

  async function pollForJobCompletion() {
    const response = await fetch(jobCompletionApi); 
    response.json()
      .then(response => {
        if (response === 0) {
          fetchRows();
          setLoading(false)
        } else {
          setLoading(true);
          pollForJobCompletion();
        }
      })
      .catch(err => setErrors(err))
  };

  function checkForDuplicate(response) {
    if (response.status === 409) {
      alert("The URL you have submitted already exists in the system. Please try again.")
    } else {
      setShowNewUrl(true)
      setNewUrl(response.short_url)
    }
  }

  return (
    <LinkContext.Provider
      value={{
        rows,
        loading,
        newUrl,
        showNewUrl,
        submitLink,
        fetchRows,
        checkForDuplicate,
        LinkContext,
        LinkProvider
      }}
    >
      {children}
    </LinkContext.Provider>
  );
}
