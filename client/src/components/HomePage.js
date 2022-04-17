import React, {useState} from 'react';
import TraderTable from './TraderTable';
import NavBar from './NavBar';
import { renderMatches } from 'react-router-dom';


const HomePage = (props)=>{
    
    // const [nav, trade] = this.props;
    return (

        <div>
            {props.nav}
            {props.trade}
        </div>
    )
    
}
export default HomePage;