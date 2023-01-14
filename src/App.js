import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Quiz from "./pages/Quiz";
import NavBar from "./pages/NavBar";
import Background from "./Background/Background";
import React, { Component } from "react";
import Grid from "./Grid/Grid";
import facts from './Data/points.json';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      facts,
    }
  }
  render(){
    return (
      <div className="App">
      {/* <header>We can help. Call for a free consulation <i class="fa-solid fa-phone"></i><a href="tel:18006753425">800-MRLEGAL</a>
      </header> */}
      <Background />
      {/* <img src="./src/MrLegal.png"></img> */}
      <BrowserRouter> 
        <NavBar/>
        <Routes>
        <Route path = "/Home" element = {<HomePage/>} exact/>
        <Route path = "/What_We_Do" element = {<AboutPage/>} exact/>
        <Route path = "/Contact" element = {<ContactPage/>} exact/>
        <Route path = "/Personal_Assesment" element = {<Quiz/>} exact/>
        <Route path ="/facts" element = {<Grid facts={this.state.facts}></Grid>} exact/>
        </Routes>  
     </BrowserRouter>
     <footer>
            <p>The information you obtain at this site is not, nor is it intended to be, legal advice. You should consult an attorney for advice regarding your individual situation. We invite you to contact us and welcome your calls, letters and electronic mail. Contacting us does not create an attorney-client relationship. Please do not send any confidential information to us until such time as an attorney-client relationship has been established.</p>
            <p><i><b>Law Offices of A. Michael Starkman</b></i></p>
            <br></br>
            <p><i>Westchester:</i></p>
            <p><i><u>2025 Compound Road</u></i></p>
            <p><i><u>Yorktown Heights, New York 10598</u></i></p>
            <br></br>
            <p><i>Albany:</i></p>
            <p><i><u>125 Delaware Avenue</u></i></p>
            <p><i><u>Delmar, New York 12054</u></i></p>





        </footer>
     </div>
    );
  }
}

export default App;
