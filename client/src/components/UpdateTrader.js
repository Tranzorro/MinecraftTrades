import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useParams} from 'react-router-dom';
const UpdateTrader = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [want, setWant] = useState("");
    const [give, setGive] = useState("");
    const [errors, setErrors] = useState({}); 
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/traders/' + id)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setName(res.data.name);
            setWant(res.data.want);
            setGive(res.data.give);
        })
        .catch((err)=>console.log(err))
    },[])
    const updateTrader = (e) => {
        e.preventDefault();
        console.log(id);
        axios.put('http://localhost:8000/api/traders/edit/' + id, {
            name,
            want,
            give,
        })
            .then(res => {
                console.log(res);
                // navigate("/"); 
            })
            // .catch(err => console.log(err))
            .catch(err =>{
                console.log("===");
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    return (
        <div>
            <h1>Update a trader</h1>
            <form onSubmit={updateTrader}>
            {/* {errors.map((err,index) => <p key={index}>{err} </p>)} */}
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    {
                    errors.name ?
                    <p>{errors.name.message}</p>
                    : null
                    // nameError?
                    // <p>{nameError}</p>
                    // : ''
                }
                </p>
                <p>
                    <label>Wants</label><br />
                    <input type="number" 
                    name="want"
                    value={want} 
                    onChange={(e) => { setWant(e.target.value) }} />
                    {
                    errors.want ?
                    <p>{errors.want.message}</p>
                    : null
                    // wantError?
                    // <p>{wantError}</p>
                    // : ''
                }
                </p>
                <p>
                    <label>Gives</label><br />
                    <input type="text" 
                    name="give"
                    value={give} 
                    onChange={(e) => { setGive(e.target.value) }} />
                    {
                    errors.give ?
                    <p>{errors.give.message}</p>
                    : null
                    // giveError?
                    // <p>{giveError}</p>
                    // : ''
                }
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default UpdateTrader;
