import "./App.css";
import React, { useEffect, useState } from  'react';
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TraderTable from "./components/TraderTable";
import HomePage from "./components/HomePage";
// import TableInput from "./components/TableData";
import TraderForm from'./components/TraderForm';
// import DisplayOneTrader from './components/DisplayOneTrader';
import UpdateTrader from './components/UpdateTrader';
//  tableInput was to insert existing data to trader db for simpler calling and editing later.
// table input is not used as main app functions.

function App(props) {
	const [traderName, setTraderName] = useState();
	// const [theTraderId, setTheTraderId] = useState();
	console.log("app.js logging traderName State. value is...")
	console.log(traderName);
	const removeFromDom = traderId => {
		setTraderName(traderName.filter(trader => trader._id != traderId));
	}
	useEffect(() =>{
        axios.get('http://localhost:8000/api/traders/getAll')
        .then((res)=>{
            // console.log(res);
            console.log(res.data);
            setTraderName(res.data);
        })
        .catch((err)=>console.log(err))
        
    },[])
	console.log("app.js is logging traderName...")
	console.log("------------------------------")
	console.log(traderName)
	console.log("------------------------------")
	return (
		<BrowserRouter>
		<div className="App">
			{/* Playing with data set to integrate it into database quickly --Thomas  */}
			{/* <TableInput />   */}
			

			<Routes>
			<Route element={<HomePage traderName={traderName} setTraderName={setTraderName} nav={<NavBar removeFromDom={removeFromDom} traderName={traderName} setTraderName={setTraderName} />} trade={<TraderTable traderName={traderName} setTraderName={setTraderName} />} />} path="/" />
			{/* <Route element={<TraderTable  />} path="/api/traders/:id"/> */}
			<Route element={<UpdateTrader traderName={traderName} setTraderName={setTraderName} />} path="/traders/:_id" />
			<Route element={<TraderForm traderName={traderName} setTraderName={setTraderName}/>} path="/traders/create" />

			</Routes>
		</div>
		</BrowserRouter>
	);
}

export default App;
