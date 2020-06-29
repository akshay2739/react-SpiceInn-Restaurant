import React, { Component } from 'react';
import './Navbar.css'
export default class MenuButton extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
        color: this.props.color? this.props.color:'black',
      }
    }
  
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    handleClick(){
    this.setState({open:!this.state.open});
    }
    
    render(){
      return(
        <div className="ham-button"
          onClick={this.props.onClick ? this.props.onClick: 
            ()=> {this.handleClick();}}>
            <p>&#9776;</p>
        </div>
      )
    }
  }