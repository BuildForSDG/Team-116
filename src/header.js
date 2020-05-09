import React from 'react';
import './style.css';

const Header = ()=>{
    return(
        <div id ='header'>
            <img src = "" alt = ""></img>
            <div>
                <button className = 'h2 mt3 mr3 w4 grow br4 bw0 white'>Log In</button>
                <button className = 'h2 mt3 mr3 w4 grow br4 bw0 white'>Sign Up</button>
            </div>
        </div>
    )
}

export default Header;