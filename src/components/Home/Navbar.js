import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {

    constructor()
    {
        super()
        this.state = {
            navStyle:{
                 
            },
            opened:false
        }
    }
    
    openNav=()=>{
        if(this.state.opened)
        {
            this.setState({navStyle:{
                display:'flex',
                width:'100%',
                height:'100%',
                transition:'0.3'    
        }})
        this.setState({opened:!this.state.opened})
        } 
        else
        {
            this.setState({navStyle:{
                display:'none',
                width:'100%',
                height:'100%'
            
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
                <div className="header">
                    <div className="logo">
                        <NavLink 
                                exact to="/"
                                activeClassName="selected" 
                                className="nav-link"
                            >Logo</NavLink>
                        <div>
                            <p className="nav-button" onClick={this.openNav}>&#9776;</p>
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
                            to="/menu/mains" 
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
