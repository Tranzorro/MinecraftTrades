import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TraderTable from "./components/TraderTable";
import HomePage from "./components/HomePage";
import TableInput from "./components/TableData";
import TraderForm from'./components/TraderForm';
// import DisplayOneTrader from './components/DisplayOneTrader';
import UpdateTrader from './components/UpdateTrader';
//  tableInput was to insert existing data to trader db for simpler calling and editing later.
// table input is not used as main app functions.

function App() {
	const [tradersList, setTradersList] = useState([]);
	const removeFromDom = traderId => {
		setTradersList(tradersList.filter(trader => trader._id != traderId));
	}
	return (
		<BrowserRouter>
		<div className="App">
			{/* Playing with data set to integrate it into database quickly --Thomas  */}
			{/* <TableInput />   */}
			

			<Routes>
			<Route element={<HomePage  nav={<NavBar removeFromDom={removeFromDom} tradersList={tradersList} setTradersList={setTradersList} />} trade={<TraderTable />} />} path="/" />
			<Route element={<TraderTable  />} path="/api/traders/:id"/>
			<Route element={<UpdateTrader/>} path="/api/traders/edit/:id" />
			<Route element={<TraderForm/>} path="/api/traders/create" />

			</Routes>
		</div>
		</BrowserRouter>
	);
}

export default App;
