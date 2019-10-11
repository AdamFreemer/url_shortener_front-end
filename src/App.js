import React, { useState, useEffect, useContext } from "react";
import './style/App.css';
import './style/bootstrap.min.css';
import './style/floating-labels.css';
import Form from './components/CreateUrlForm/Form';
import Table from './components/TopLinksList/Table';
import { LinkProvider } from "./contexts/LinkContext";

function App() {
  const [setErrors] = useState(false);
  const [rows, setRows] = useState(false);
  const targetUrl = 'https://micro-url-api.herokuapp.com/api/v1/top_urls'
  async function fetchData() {
    const response = await fetch(targetUrl);
    response.json()
      .then(res => setRows(res))
      .catch(err => setErrors(err));
  }
  useEffect(() => {
    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LinkProvider>
      <div className="App">
        <title>Micro URL Shortener</title>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <Form />
                </td>
                <td>
                  <Table rows={rows} />
                </td>
              </tr>
            </tbody>
          </table>        
      </div>
    </LinkProvider>

  );
}

export default App;
