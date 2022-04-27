import React, { useEffect, useState } from  'react';
import axios from 'axios';
import TraderTable from './TraderTable';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

//tradertable needs to be able to read traderList object data to be able to populate table with info.
const HomePage = (props)=>{
    
    // const {theTraderId, setTheTraderId} = props;
    const {traderList, setTraderList} = props;
    console.log("homepage logging... traderList prop is...")
    console.log(traderList);
    
    return (

        <div className="mainWrapper">
            <div className="main hideScroll">
                <NavBar traderList = {traderList}/>
                <TraderTable traderList = {traderList} />
            </div>
        </div>
    )
    
}
export default HomePage;