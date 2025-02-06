// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Singup from './Pages/SignUp';
import store from './Store/Store';
import AddServer from './Pages/Addserver' ;
import { Provider } from 'react-redux';
import Login from './Components/Login';
import Protected from './Components/AuthLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    
    children: [
      {
        path: "signup",  
        element: <Singup />,
      },
      {
        path: "home", 
        element: <Protected children={<Home />} />,
      },

      {
        path: "Login", 
        element: <Login/>,
      },
      {path: "addserver", element: <Protected children={<AddServer />}/>}
    ],
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} > </RouterProvider>
  </Provider>
);

reportWebVitals();
