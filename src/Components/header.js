import React from 'react';
import '../Assets/Style/style.css';

const Header = ()=>{
    return(
        <div id ='header'>
            <h1 className = 'ml3 fw-bold '>SMEs Fund Cycle</h1>
            
                <p className = 'h2 mt3 dim   mr3 white pointer underline'>Log In</p>
                <p className = 'h2 mt3  dim  mr3  white pointer underline'>Sign Up</p>
            
        </div>
    )
}

export default Header;