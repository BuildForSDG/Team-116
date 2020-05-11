import React from 'react';
import '../Assets/Style/style.css';
import img from '../Assets/Images/dollar.png';
import img1 from '../Assets/Images/coach_1.png';
import img2 from '../Assets/Images/people.png';
import img3 from '../Assets/Images/analysis.png';

const Offers = ()=>{
    return(
        <div id = "offers" className = 'mt3'>
            <h1 className = 'tc gray'>What we Offer</h1>
            <div id = "card-div">
                <div id = "card">
                    <img src = {img} ></img>
                    <div>
                        <h6 className = 'white f5'>Access to fundings</h6>
                        <h6 className = 'white f5'>Investment Plans</h6>
                        <h6 className = 'white underline grow f4'>Learn More</h6>
                    </div>
                </div>
                <div  id = "card">
                    <img src= {img1}></img>
                    <div>
                        <h6 className = 'white mt4 tc f5'>Mentorship Program</h6>
                        <h6 className = 'white underline f5 grow'>Learn More</h6>
                    </div>
                </div>
                <div id ="card">
                <img src= {img2}></img>
                    <div>
                        <h6 className = 'white mt4 tc f5'>Connect SMEs<br></br>With Investors</h6>
                        <h6 className = 'white underline f5 grow'>Learn More</h6>
                    </div>
                </div>
                <div id ="card">
                <img src= {img3}></img>
                    <div>
                        <h6 className = 'white mt4  f5 tc'>Real Time Analysis</h6>
                        <h6 className = 'white  f5 underline grow'>Learn More</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;