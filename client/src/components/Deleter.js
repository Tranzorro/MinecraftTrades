import React, { useEffect, useState } from  'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom';

const Deleter = (props) => {
    const navigate = useNavigate();
    const {traderList} = props;
    const {removeFromDom} = props;
    const {id} = props;
    const deleteTrader = (id) =>{
            axios.delete('http://localhost:8000/api/traders/delete/' + props.id)
            .then((res)=>{
                console.log(props.id);
                this.removeFromDom(traderList);
                navigate("/"); 
            })
            .catch((err)=>console.log(err))
        }
        // removeFromDom(id);
    return(
        <button onClick={(e)=>{deleteTrader(props.traderList)}}> Delete </button>
    )
}

export default Deleter;