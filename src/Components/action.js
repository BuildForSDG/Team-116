import React from 'react';
import Mentor from '../Assets/Images/mentor.jpg';
import Analysis from '../Assets/Images/analysis.jpg';
import Funds  from '../Assets/Images/funds.jpg';
import Investors from '../Assets/Images/investors.jpg';
import '../Assets/Style/style.css';

let mentor = "Our Mentorship program will help you take your business to the next level";
let analysis = "Realtime Analysis of your business";
let funds = "Access to loans and investments"
let investors = "Connecting SME owners to investors"

const notes = [mentor , analysis , funds , investors];

const slides = [Mentor, Analysis, Funds, Investors];
var currentslide = 0;
var number0fslides = slides.length - 1;


function loader() {
    changeimage();
}

function changeimage() {
    console.log("changeimage function");
    if (currentslide > number0fslides) {
        currentslide = 0
    }
    document.getElementById("image").src = `${slides[currentslide]}`;
    document.getElementById("ip").innerHTML = `${notes[currentslide]}`
    currentslide++;
    setTimeout(changeimage, 3000);

}

class Action extends React.Component{
    componentDidMount(){
        loader()
    }
    render(){
        return(
            <div id = "action" className=''>
                <div id = "sub1">
                    <div className='mt5'>
                        <h1 className = 'ml3 mt5 fw9 white'>Connect, and Grow Scale up your  Business Today!</h1>
                        <p className = ' ml3 f3 white'>Join a scalable management information System<br></br>
                        Which will Connect SMEs within Africa<br></br>
                        with credit Facility providers.....
                        </p>
                        <button className = 'ml3  bg-white  grow pointer br2'>Get Started</button>
                    </div>
                    <div id = "illustrat" className = 'br4'>
                        <img height="500px" width = "auto" id="image" className = "br4"></img>
                        <p id = "ip" className = "tc "></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Action;