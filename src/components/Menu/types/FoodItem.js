import React, { Component } from 'react'
import './FoodItem.css'

export default class FoodItem extends Component {
    render() {
        const item = this.props.item
        return (
            <div className="food-card">
                <img src={item.photo} alt="" className="food-item-image"/>
                <div className="food-text">
                    <div className="food-card-header">
                        <p className="food-item-name">{item.name}</p>
                        <p className="food-item-price">{item.price}</p>
                    </div>
                    <div className="food-item-description">
                        <p>{item.desc}</p>
                    </div>
                </div>
            </div>
        )
    }
}
