import React, { useEffect, useState } from  'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import {Link} from 'react-router-dom';

// this will contain every required trader name variable, which will be passed to the TraderTable via props
// without these the app will not pull the correct information to display on screen.
// this will be the only front end file that needs updating to add more traders.

const NavBar = (props) => {
    const [traderName, setTraderName] = useState();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/traders/getAll')
        .then((res)=>{
            // console.log(res);
            console.log(res.data);
            setTraderName(res.data);
        })
        .catch((err)=>console.log(err))
        
    },[])
// nav bar is now populated by database information.
    return (
        <nav className="hideScroll sidenav"> 
        {traderName ? 
            traderName.map((name, index)=>{
                    return(
                        
                        <div><a href="#{name.name}">{name.name}</a> <DeleteButton /></div>
                        
                )})
            : null}
                    {/* <a href="#CurrencyExchange">Currency Exchange</a>
                    <a href="#EventSmith">Event Smith</a>
                    <a href="#EventTrader">Event Trader</a>
                    <a href="#Witch">A not as evil witch</a>
                    <a href="#Bear">Adventuring Miner</a>
                    <a href="#AppleFarmer">Apple Farmer</a>
                    <a href="#ArmorEnch">Armor Enchanter</a>
                    <a href="#ArmorSmith">Armor Smith</a>
                    <a href="#Baker">Baker</a>
                    <a href="#BerryCol">Berry Collector</a>
                    <a href="#Boot">Boot Shiner</a>
                    <a href="#Bowyer">Bowyer</a>
                    <a href="#Candlemaker">Candlemaker</a>
                    <a href="#Cook">Cook</a>
                    <a href="#CbEngineer">Crossbow Engineer</a>
                    <a href="#DockWorker">Dock Worker</a>
                    <a href="#Farmer">Farmer</a>
                    <a href="#Fisherman">Fisherman</a>
                    <a href="#Fletcher">Fletcher</a>
                    <a href="#Florists">the Florists</a>
                    <a href="#GlassBlower">Glass Blower</a>
                    <a href="#HeadSmith">Head Smith</a>
                    <a href="#HelmPolisher">Helm Polisher</a>
                    <a href="#HorseMaster">Horse Master</a>
                    <a href="#IceImporter">Ice Importer</a>
                    <a href="#Innkeeper">Innkeeper</a>
                    <a href="#Joe">Joe</a>
                    <a href="#Lumberjack">Lumberjack</a>
                    <a href="#Mayor">Mayor</a>
                    <a href="#OldFishers">Old Bob & Old Fisherman</a>
                    <a href="#Preacher">Preacher</a>
                    <a href="#Pyromancer">Pyromancer</a>
                    <a href="#Qbartender">Quest Bartender</a>
                    <a href="#Rancher">Rancher</a>
                    <a href="#RetFighter">Retiarius Fighter</a>
                    <a href="#Saucier">Saucier</a>
                    <a href="#SpaWorker">Spa Worker</a>
                    <a href="#Swordswolf">Swordswolf</a>
                    <a href="#TheUnrefiner">The Unrefiner</a>
                    <a href="#ToolEnch">Tool Enchanter</a>
                    <a href="#ToolSmith">Tool Smith</a>
                    <a href="#TravelGather">Travelling Gatherer</a>
                    <a href="#Vinny">Vinny the Unkillable</a>
                    <a href="#WarehouseWorker">Warehouse Worker</a> */}
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
