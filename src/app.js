import React , { Component } from 'react';
import './Assets/Style/style.css'
import Header from './Components/header';
import Action from './Components/action';
import Offers from './Components/offers';
import Impact from './Components/impact';
import Testimonies from './Components/testimony';
import Partners from './Components/partners';
import Footer from './Components/footer'

class App extends Component{
    render(){
        return(
            <div>
                <div id = "main">
                    <Header/>
                    <Action/>
                </div>
                <Offers/>
                <Impact/>
                <Testimonies/>
                <Partners/>
                <Footer/>
            </div>
        )
    }
}

export default App;
