
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Page404 from './component/Page404';
import CarDetails from "./component/CarDetails";
import Main from './component/Main';
import Login from './component/Login';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/car-details" element={<CarDetails />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
