import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <CssBaseline>
        <App />
    </CssBaseline>
  </React.StrictMode>
  </Router>,

  document.getElementById('root')
);
