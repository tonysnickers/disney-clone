import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { route } from './route';

const Home = lazy(()=> import("../pages/index"))

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={route.home} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
