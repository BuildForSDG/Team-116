import React from 'react';
import '../Assets/Style/style.css';

const Header = ()=>{
    return(
        <div id ='header'>
            <h1 className = 'ml3 fw-bold dark-blue'>SMEs Fund Cycle</h1>
            <div id='d1'>
                <p className = 'gray underline pointer grow'>Partners</p>
                <p className = 'gray underline pointer grow'>Blogs</p>
                <p className = 'gray underline pointer grow'>Events</p>
            </div>
            <div id = 'd2'>
                <input type = 'search' placeholder = 'Search for Business'></input>
            </div>
            <div>
                <button className = 'h2 mt3 dim   mr3 bg-blue pointer white bw0 w4 br4'>Log In</button>
                <button className = 'h2 mt3  dim  mr3  bg-blue pointer white bw0 w4 br4'>Sign Up</button>   
            </div>
        </div>
    )
}

export default Header;