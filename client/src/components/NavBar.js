import React, { useEffect, useState } from  'react';
import axios from 'axios';
import Deleter from './Deleter';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NavBar = (props) => {
    const {traderName} = props;
    const {removeFromDom} = props;
    console.log("navbar logging traderName value.... it is:")
    console.log(traderName)

    
// nav bar is now populated by database information.
    return (
        <nav className="hideScroll sidenav"> 
        {props.traderName ? 
            props.traderName.map((trader, index)=>{
                    return(
                        
                        <div key = {index}><a href="#{trader.name}">{trader.name}</a> <Deleter removeFromDom={removeFromDom} traderName= {traderName}id = {trader.id} /></div>
                        
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
