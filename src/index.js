import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyBaDBqTJTR8QztStwLir_yEvpKUCDh9sAM",
  authDomain: "pseudogram-fab9a.firebaseapp.com",
  databaseURL: "https://pseudogram-fab9a.firebaseio.com",
  projectId: "pseudogram-fab9a",
  storageBucket: "pseudogram-fab9a.appspot.com",
  messagingSenderId: "666737739828"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
