import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './context/cartContext';
import { BrowserRouter } from 'react-router-dom';

/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3GyLgV0lpHerPP36u_PCqzYc37a3dIhs",
  authDomain: "melatini-turismo.firebaseapp.com",
  projectId: "melatini-turismo",
  storageBucket: "melatini-turismo.appspot.com",
  messagingSenderId: "662301813235",
  appId: "1:662301813235:web:52ff92618a25ef12f7ca86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
      <App />
  </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
