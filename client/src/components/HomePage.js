import React, { useEffect, useState } from  'react';
import axios from 'axios';
import TraderTable from './TraderTable';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

//tradertable needs to be able to read traderName object data to be able to populate table with info.
const HomePage = (props)=>{
    
    const {traderName, setTraderName} = props;
    console.log("homepage logging... traderName prop is...")
    console.log(traderName);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/traders/getAll')
        .then((res)=>{
            // console.log(res);
            console.log(res.data);
            setTraderName(res.data);
        })
        .catch((err)=>console.log(err))
        
    },[])
    return (

        <div className="mainWrapper">
            <div className="main hideScroll">
                <NavBar traderName = {traderName} />
                {/* <TraderTable traderName = {traderName} /> */}
            </div>
        </div>
    )
    
}
export default HomePage;