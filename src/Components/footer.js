import React from 'react';
import '../Assets/Style/style.css'
import img from '../Assets/Images/facebook.png';
import img1 from '../Assets/Images/twitter.png'
import img2 from '../Assets/Images/google.png'
import img3 from '../Assets/Images/youtube.png'

const Footer = ()=>{
    return(
        <div>
            <div id = 'fmaindiv' className =' mt5'>
                <div id ='fsubdiv'>
                    <div>
                        <h1>Quick Links</h1>
                        <h3>Create an Account</h3>
                        <h3>Available offers</h3>
                        <h3>Hot deals</h3>
                        <h3>Business Directories</h3>
                    </div>
                    <div>
                        <h1>SME Fund Cycle</h1>
                        <h3>About</h3>
                        <h3>Blog</h3>
                        <h3>Events</h3>
                    </div>
                    <div>
                        <h1>Contact Us</h1>
                        <h3>+2348065811581</h3>
                        <h3>info@smesfundcycle@gmail.com</h3>
                        <div id = "imagediv">
                            <img src = {img} width = '30px' height = '30px'></img>
                            <img src = {img1} width = '30px' height = '30px'></img>
                            <img src = {img2} width = '30px' height = '30px'></img>
                            <img src = {img3} width = '30px' height = '30px'></img>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className = 'white ml4'>
                        Disclaimer: The information contained in this website is for general information purposes only. The information is provided by SMEFundCycle and while<nr></nr>
                        we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the<br></br> 
                        completeness, accuracy, reliability, suitability or availability with respect to the website or the information,<br></br> products, services, or related graphics contained
                        on the website for any purpose. ..Read all
                    </h4>
                </div>
            </div>
        </div>
    )
}


export default Footer;