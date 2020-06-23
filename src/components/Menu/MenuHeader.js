import React, { Component } from 'react'

import { NavLink, useRouteMatch } from 'react-router-dom'

const MenuHeader = () => {
    let { url } = useRouteMatch()    
    return (
            <div className="d-flex justify-content-between w-50 mx-auto">
                <NavLink to={url+'/appetizers'}>Appetizers</NavLink>
                <NavLink to={url+'/breads'}>Breads</NavLink>
                <NavLink to={url+'/desserts'}>Desserts</NavLink>
                <NavLink to={url+'/drinks'}>Drinks</NavLink>
                <NavLink to={url+'/lunchcombos'}>Lunch Combos</NavLink>
                <NavLink to={url+'/mains'}>Mains</NavLink>
                <NavLink to={url+'/ricecombos'}>Rice Combos</NavLink>
            </div>
        )
    }
    export default MenuHeader
