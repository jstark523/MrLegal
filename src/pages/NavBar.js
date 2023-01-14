import React, {Component} from 'react';
import { MenuItems } from './MenuItems';
import {Button} from'./Button';
import './NavBar.css';

class NavBar extends Component {
  state={clicked: false}

  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return(
        <div>
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Mr Legal</h1>
            <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 
        'nav-menu'}>
          {MenuItems.map((item, index) =>{
            return (
              <li key= {index}>
                  <a className={item.cName} href ={item.url}>
                  {item.title}
                  </a>
              </li>
              
            )
          })}
        </ul>
      </nav>
      </div>
    )
  }
}
export default NavBar