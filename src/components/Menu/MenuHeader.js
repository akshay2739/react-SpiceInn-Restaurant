import React, { Component } from 'react'

import { NavLink, useRouteMatch } from 'react-router-dom'

const MenuHeader = () => {
    let { url } = useRouteMatch()    
    return (
            <div className="d-flex justify-content-between  mx-auto menu-header">
                <NavLink 
                    exact to={url+'/appetizers'}
                    activeClassName="selected-menu"
                    className="nav-link"
                    >Appetizers</NavLink>
                <NavLink exact to={url+'/breads'} activeClassName="selected-menu" className="nav-link" >Breads</NavLink>
                <NavLink exact to={url+'/desserts'} activeClassName="selected-menu" className="nav-link" >Desserts</NavLink>
                <NavLink exact to={url+'/drinks'} activeClassName="selected-menu" className="nav-link" >Drinks</NavLink>
                <NavLink exact to={url+'/lunchcombos'} activeClassName="selected-menu" className="nav-link" >Lunch Combos</NavLink>
                <NavLink exact to={url+'/mains'} className="nav-link" activeClassName="selected-menu" >Mains</NavLink>
                <NavLink exact to={url+'/ricecombos'} className="nav-link" activeClassName="selected-menu" >Rice Combos</NavLink>
            </div>
        )
    }
    export default MenuHeader
