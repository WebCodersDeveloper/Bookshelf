import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import ErrorP from '../pages/ErrorP/ErrorP.jsx'
import SignUp from "../pages/SignUp/SignUp.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import Loading from "../pages/Loading/Loading.jsx";


export default function Router() {
  return (
    <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="*" element={ <ErrorP />}/>
        <Route path="/signup" element={ <SignUp />}/>
        <Route path="/signin" element={ <SignIn />}/>
        <Route path="/loading" element={ <Loading />}/>
    </Routes>
  )
}
