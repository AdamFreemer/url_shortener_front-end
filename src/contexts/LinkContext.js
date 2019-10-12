import React, { useState, createContext } from 'react';

export const LinkContext = createContext({});
export function LinkProvider(props) {
  const { children } = props;
  const [setErrors] = useState(false);
  const [rows, setRows] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState("Create Short URL")

  function SubmitHandler(link) {
    setSubmit("Submitting...")
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
    sleep(1000)
    setLoading(false)
  } 

  async function fetchRows() {
    const rowsUrl = 'https://micro-url-api.herokuapp.com/api/v1/top_urls'
    const response = await fetch(rowsUrl); 
    response.json()
      .then(res => setRows(res))
      .catch(err => setErrors(err));
  }

  function PostLink(link) {
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
    <LinkContext.Provider
      value={{
        rows,
        loading,
        setLoad,
        submit,
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
