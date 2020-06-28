import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/images/logo.png'

export default class Navbar extends Component {

    constructor()
    {
        super()
        this.state = {
            navStyle:{
                 
            },
            opened:true
        }
    }
    
    openNav=()=>{
        if(this.state.opened)
        {
            this.setState({navStyle:{
                display:'flex',
        }})
        this.setState({opened:!this.state.opened})
        } 
        else
        {
            this.setState({navStyle:{
                display:'none',
            }})
            this.setState({opened:!this.state.opened})
        }
    }

    handleClick = () => {
        if(this.state.opened){
            this.openNav()
        }
    }

    render() {
        return (
                <div className="header shadow-lg  bg-white">
                    <div className="logo">
                        <NavLink 
                            exact to="/"
                            className="logo-name"
                        ><img src={logo} alt=""/><p>Spice Inn</p></NavLink>
                        <div>
                            <p className="nav-button" onClick={this.openNav}>{this.state.opened?<p>&#9776;</p>:<p>&#10005;</p>}</p>
                        </div> 
                    </div>
                    
                    <div className="nav-bar" style = {this.state.navStyle}>

                        <NavLink 
                            onClick={() => this.handleClick()}
                            to="/about" 
                            activeClassName="selected" 
                            className="nav-link"
                        > About</NavLink>

                        <NavLink 
                            to="/menu" 
                            activeClassName="selected"
                            className="nav-link"
                        > Menu</NavLink>

                        <NavLink 
                            to="/gallary" 
                            activeClassName="selected"
                            className="nav-link"
                        > Gallary</NavLink>

                        <NavLink 
                            to="/contact" 
                            activeClassName="selected"
                            className="nav-link"
                        >Contact</NavLink>
                    </div>
                </div>
        )
    }
}
