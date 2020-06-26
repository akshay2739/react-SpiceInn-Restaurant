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
                <NavLink to={url+'/breads'} activeClassName="selected-menu" className="nav-link" >Breads</NavLink>
                <NavLink to={url+'/desserts'} activeClassName="selected-menu" className="nav-link" >Desserts</NavLink>
                <NavLink to={url+'/drinks'} activeClassName="selected-menu" className="nav-link" >Drinks</NavLink>
                <NavLink to={url+'/lunchcombos'} activeClassName="selected-menu" className="nav-link" >Lunch Combos</NavLink>
                <NavLink to={url+'/mains'} className="nav-link" activeClassName="selected-menu" >Mains</NavLink>
                <NavLink to={url+'/ricecombos'} className="nav-link" activeClassName="selected-menu" >Rice Combos</NavLink>
            </div>
        )
    }
    export default MenuHeader
