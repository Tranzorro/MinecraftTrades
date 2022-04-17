import './App.css';
import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import TraderTable from './components/TraderTable';
import HomePage from './components/HomePage';
// import traderForm from'./components/traderForm';
// import DisplayOneTrader from './components/DisplayOneTrader';
// import UpdateTrader from './components/UpdateTrader';

function App() {
  return (
    // <BrowserRouter>
      <div className="App">


        <HomePage  nav = {<NavBar />} trade = {<TraderTable />} />

        
        {/* <Routes> */}
          {/* <Route element={<HomePage/>} path="/" /> */}
          {/* <Route element={<DisplayOneTrader  removeFromDom={removeFromDom}/>} path="/api/traders/:id"/> */}
          {/* <Route element={<UpdateTrader/>} path="/api/traders/edit/:id" /> */}
          
        {/* </Routes> */}
      </div>
    // </BrowserRouter>
  );
}

export default App;
