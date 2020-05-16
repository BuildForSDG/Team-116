import React from 'react';
import Mentor from '../Assets/Images/mentor.jpg';
import Analysis from '../Assets/Images/analysis.jpg';
import Funds  from '../Assets/Images/funds.jpg';
import Investors from '../Assets/Images/investors.jpg';
import Main from '../Assets/Images/Capture.JPG'
import '../Assets/Style/style.css';

let main = "Connect, Grow<br> and Scale up<br>your Business Today!";
let mentor = "Our Mentorship program,<br>will help you take your<br> business to the next level";
let analysis = "Realtime Analysis of your business";
let funds = "Access to loans and investments";
let investors = "Connecting SME owners to investors";

let mainP = "Join a scalable management information System<br>Which will Connect SMEs within Africa<br>with credit Facility providers.....";
let mentorP = "You're just a few clicks away from learning the best business practices";
let analysisP = "Spot on analysis about your business<br>making things easier";
let fundsP = "Quick access to funds to help set up your business";
let investorsP = "Bridging the gap between investors and SME owners";


const notes = [main , mentor , analysis , funds , investors];
const notesP = [mainP , mentorP , analysisP , fundsP, investorsP];
const slides = [Main, Mentor, Analysis, Funds, Investors];

function loader(n){
    document.getElementById('h').innerHTML = `${notes[n]}`;
    document.getElementById('p').innerHTML = `${notesP[n]}`;
    document.getElementById('image').src = `${slides[n]}`
} 

function test(){
    console.log("test")
}

class Action extends React.Component{
    componentDidMount(){
        loader(0);
    }

    
    render(){
        return(
            <div id = "action" className=''>
                <div id = "sub1">
                    <div className='mt5'>
                        <h1 className = 'ml3 mt5 fw2 gray f1' id = 'h'></h1>
                        <p className = ' ml3 f3 fw1 dark-blue' id = 'p'></p>
                        <div id = "butt">
                            <button className = 'ml3  bg-blue white grow pointer br2'>Get Started</button>
                        </div>
                    </div>
                    <div id = "illustrat" className = 'br4'>
                        <img height="500px"  id="image" className = "br4"></img>
                    </div>
                </div>
                <div id ="sub2">
                    <div onClick = {()=>loader(0)}>.</div>
                    <div onClick = {()=>loader(1)}>.</div>
                    <div onClick = {()=>loader(2)}>.</div>
                    <div onClick = {()=>loader(3)}>.</div>
                    <div onClick = {()=>loader(4)}>.</div>
                </div>
            </div>
        )
    }
}

export default Action;