import React, { useEffect, useState } from  'react';
import axios from 'axios';
import Deleter from './Deleter';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NavBar = params => {
    const {traderName} = useParams();

    
// nav bar is now populated by database information.
    return (
        <nav className="hideScroll sidenav"> 
        {params.traderName ? 
            params.traderName.map((trader, index)=>{
                    return(
                        
                        <div key = {index}><a href="#{trader.name}">{trader.name}</a> <Deleter theTrader= {trader._id}id = {trader.id} /></div>
                        
                )})
            : null}
                    <p>site created by</p> <a href="https://discordapp.com/users/138824505458950145/">Larck Drakengold</a>
                    <p>icons supplied in part by</p>
                    <p>minecraft textures</p> 
                    <a href="https://discordapp.com/users/479091485283975168/">Pineapple</a>
                    <Link to = "/api/traders/create">
                        <button> add trader</button>
                    </Link>
                    
                </nav>
            );

}

export default NavBar;
