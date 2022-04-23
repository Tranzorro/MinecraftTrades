import React, { useState } from  'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
    
const TraderForm = () => {
    console.log("you are in trader form to create a new trader.")
    const [name, setName] = useState("");
    const [want, setWant] = useState("");
    const [give, setGive] = useState("");
    const [errors, setErrors] = useState({}); 
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/traders/create',{
            name,
            want,
            give,
        
        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
        })
        .catch(err =>{
            setErrors(err.response.data.errors);
        })
}
    return(
        <form onSubmit={onSubmitHandler} >
            <div>
                <h1> Add an trader: </h1>
                <label>Name: </label> 
                <input type="text" onChange={ (e) => setName(e.target.value) } />
                {
                    errors.name ?
                    <p>{errors.name.message}</p>
                    : null
                }
                <label>Want: </label> 
                <input type="text" onChange={ (e) => setWant(e.target.value) } />
                {
                    errors.want ?
                    <p>{errors.want.message}</p>
                    : null
                }
                <label>Give: </label> 
                <input type="text" onChange={ (e) => setGive(e.target.value) } />
                {
                    errors.give ?
                    <p>{errors.give.message}</p>
                    : null
                }
            </div>
            <input type="submit" value="submit" />
            <Link to={'/'}> home</Link>
        </form>
    );
};
    
export default TraderForm;