import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './table.css';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
 import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
 } from "react-router-dom";
import AllRasp from './pages/AllRasp';

const router = createBrowserRouter ([
 
  {
path: "/",
element: <Home />
},
{
  path: "/raspisanie",
element: <AllRasp /> 
}
])

const App = () =>  {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
     
  )
}

export default App
