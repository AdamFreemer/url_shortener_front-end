import React from "react";
import './style/App.css';
import './style/bootstrap.min.css';
import './style/floating-labels.css';
import Form from './components/CreateUrlForm/Form';
import Table from './components/TopLinksList/Table';
import { LinkProvider } from "./contexts/LinkContext";

function App() {
  return (
    <LinkProvider>
      <div className="App">
        <title>Micro URL Shortener</title>
        
        <h1 className="text-center mb-3 font-weight-light">Micro URL Shortener</h1>
        <h6 className="text-center mb-3 font-weight-light">Top 100 Viewed URLs</h6>
        <Table />
        <hr />
        <Form />

        </div>
      
    </LinkProvider>
  );
}

export default App;
