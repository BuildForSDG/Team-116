import React , { Component } from 'react';
import Header from './header.js';
import Action from './action.js';
import Offers from './offers.js';
// import Impact from './impact.js';
// import Testimonies from './testimony.js';
// import Partners from './partners.js';
// import Footer from './footer.js'

class App extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Action/>
                <Offers/>
            </div>
        )
    }
}

export default App;
