import React from 'react';
import img from '../Assets/Images/user.png'

const Testimonies = ()=>{
    return(
        <div>
            <div id = "testimony">
                <h1 className = 'tc gray'>Testimonies</h1>
                <div id = "tcard">
                    <img src= {img} ></img>
                    <div>
                        <p>The best thing that happened to my business<br></br>was identifying with this platorm..</p>
                        <h3 className = 'tc'>Jane Doe</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonies