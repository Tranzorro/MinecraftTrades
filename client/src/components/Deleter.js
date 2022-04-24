import React, { useEffect, useState } from  'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';

const Deleter = (props) => {
    const navigate = useNavigate();
    const {traderName} = props;
    const {removeFromDom} = props;
    const {id} = useParams();
    const deleteTrader = (id) =>{
            axios.delete('http://localhost:8000/api/traders/delete/' + id)
            .then((res)=>{
                this.removeFromDom(id);
                navigate("/"); 
            })
            .catch((err)=>console.log(err))
        }
        // removeFromDom(id);
    return(
        <button onClick={(e)=>{deleteTrader(props.traderName)}}> Delete </button>
    )
}

export default Deleter;