import React, { useEffect, useState } from  'react';
import axios from 'axios';
import Deleter from './Deleter';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import UpdateTrader from './UpdateTrader';

const NavBar = (props) => {
    const {traderName} = props;
    // const {theTraderId, setTheTraderId} = props;
    const navigate = useNavigate();
    const {removeFromDom} = props;
    const [deleted, setDeleted] = useState(false);
    console.log("navbar logging traderName value.... it is:")
    console.log(traderName)
    
    const onDeleteHandler=(e, traderId) => {
        console.log("in on delete handler." , traderId);
        axios.delete('http://localhost:8000/api/traders/delete/' + traderId)
        .then((res)=>{
            // console.log(props.id);
            setDeleted(!deleted);
            navigate("/");
        })
        .catch((err)=>console.log(err))
        
    }
    
    
// nav bar is now populated by database information.

return (
    <nav className="hideScroll sidenav"> 
    {props.traderName ? 
        props.traderName.map((trader, index)=>{
                return(
                    
                    <div key = {index}>
                        <p>{trader._id}</p>
                        {/* {setTheTraderId = trader._id}; */}
                        <a href="#{trader.name}">{trader.name}</a> 
                        <Link to = '/traders/${trader._id}' >
                            <button> edit trader</button>
                        </Link>
                        <button onClick={(e)=> onDeleteHandler(e,trader._id)}>
                            Delete
                        </button>
                        {/* <Deleter removeFromDom={removeFromDom} traderName= {traderName}id = {traderName.id} /> */}
                    </div>
                    
            )})
        : null}
                <p>site created by</p> <a href="https://discordapp.com/users/138824505458950145/">Larck Drakengold</a>
                <p>icons supplied in part by</p>
                <p>minecraft textures</p> 
                <a href="https://discordapp.com/users/479091485283975168/">Pineapple</a>
                <Link to = "/traders/create">
                    <button> add trader</button>
                </Link>
                
                
            </nav>
        );

}

export default NavBar;
