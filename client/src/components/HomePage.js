import React, {useState} from 'react';
import TraderTable from './TraderTable';
import NavBar from './NavBar';


const HomePage = (props)=>{
    
    return(
        <div>
            <NavBar />
            <TraderTable />
        </div>
    );
}
export default HomePage;