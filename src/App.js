import React from 'react';
import { Counter } from './features/counter/Counter';
import ProductList from './features/product-List/ProductList'
import Home from './pages/Home'

import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>),
  },
  {
    path: "/login",
    element:  <LoginPage></LoginPage>,
  }, 
  {
    path: "/Signup",
    element:  <SignupPage></SignupPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      </div>
  );
}

export default App;
