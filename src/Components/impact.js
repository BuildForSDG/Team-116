import React from 'react';
import '../Assets/Style/style.css';
import img from '../Assets/Images/shake.png';
import img1 from '../Assets/Images/givemoney.png';
import img2 from '../Assets/Images/cart.png';
import img3 from '../Assets/Images/train.png';

const Impact = ()=>{
    return(
        <div>
            <div id = "impact">
                <h1 className = 'tc gray'>Our Impacts</h1>
                <div id = "cardi-div" className = 'mt3'>
                    <div id = "cardi">
                        <img src = {img}  ></img>
                        <div>
                            <h6 className = 'tc f4'>123+<br></br>Businesses</h6>
                        </div>
                    </div>
                    <div  id = "cardi">
                        <img src= {img1} ></img>
                        <div>
                            <h6 className='tc f4'>25+<br></br>Funders</h6>
                        </div>
                    </div>
                    <div id ="cardi">
                    <img src= {img2} ></img>
                        <div>
                            <h6 className = 'tc f4'>3500+<br></br>Sales</h6>
                        </div>
                    </div>
                    <div id ="cardi">
                    <img src= {img3}></img>
                        <div>
                            <h6 className = 'tc f4'>700+<br></br>Trained</h6>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Impact;