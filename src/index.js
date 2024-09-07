import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './utils/store';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <GoogleOAuthProvider clientId="856487224551-vc0osurtjkj4qf6mua27t1hr050ld03p.apps.googleusercontent.com">
   <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
   </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
