import React from 'react';
import {Routes, Route,Navigate } from "react-router-dom";
import { HomePage,Login,Register,Detail } from "./pages";


function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id/:name" element={<Detail />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login1" element={<h1>1234</h1>} />
        <Route path="/login2" element={<Navigate to='/asdf' />} />        
      </Routes>
    </div>
  );
}

export default App;
