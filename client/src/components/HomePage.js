import React, { useEffect, useState } from  'react';
import axios from 'axios';
import TraderTable from './TraderTable';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

//tradertable needs to be able to read traderName object data to be able to populate table with info.
const HomePage = (props)=>{
    
    // const {theTraderId, setTheTraderId} = props;
    const {traderName, setTraderName} = props;
    console.log("homepage logging... traderName prop is...")
    console.log(traderName);
    
    return (

        <div className="mainWrapper">
            <div className="main hideScroll">
                <NavBar traderName = {traderName}/>
                {/* <TraderTable traderName = {traderName} /> */}
            </div>
        </div>
    )
    
}
export default HomePage;