import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/images/logo.png'
import MenuBar from './MenuBar'
import MenuButton from './MenuButton'
import MenuItem from './MenuItem'

export default class Navbar1 extends Component {


    constructor(props){
        super(props);
        this.state={
          menuOpen:false,
        }
      }
      
      handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
      }
      
      handleLinkClick() {
        this.setState({menuOpen: false});
      }
      
      render(){
        const styles= 
          {
            body: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100vw',
              height: '100vh',
              filter: this.state.menuOpen ? 'blur(2px)':null,
              transition: 'filter 0.5s ease',
            },
          }
        const menu = [                       
            <NavLink 
                to="/about" 
                className="nav-link"
            > About</NavLink>,
            <NavLink 
                to="/menu"
                className="nav-link"
            > Menu</NavLink>,
            <NavLink 
                to="/gallary"
                className="nav-link"
            > Gallary</NavLink>,
            <NavLink 
                to="/contact" 
                className="nav-link"
            >Contact</NavLink>
        ]
        const menuItems = menu.map((val,index)=>{
          return (
            <MenuItem 
              key={index} 
              delay={`${index * 0.1}s`}
              onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
        });
        
        return(
          <div>
            <div className="header">
                <div className="logo">
                    <NavLink 
                        exact to="/"
                        className="logo-name"
                    >
                        <img src={logo} alt=""/>
                        <p>Spice Inn</p>    
                    </NavLink>
                </div>
               <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='#ad0023'/>
            </div>
            <MenuBar open={this.state.menuOpen}>
              {menuItems}
            </MenuBar>
          </div>
        )
      }
}
