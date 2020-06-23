import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

export default class MenuHeader extends Component {
    render() {
        return (
            <div>
                <NavLink to="/menu/appetizers">Appetizers</NavLink>
                <NavLink to="/menu/breads">Breads</NavLink>
                <NavLink to="/menu/desserts">Desserts</NavLink>
                <NavLink to="/menu/drinks">Drinks</NavLink>
                <NavLink to="/menu/lunchcombos">Lunch Combos</NavLink>
                <NavLink to="/menu/Mains">Mainss</NavLink>
                <NavLink to="/menu/ricecombos">Rice Combos</NavLink>

            </div>
        )
    }
}
