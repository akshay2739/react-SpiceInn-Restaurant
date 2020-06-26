import React, { Component } from 'react'
import './FoodItem.css'
import image from '../../../assets/images/img-01.jpg'

export default class FoodItem extends Component {
    render() {
        const item = this.props.item
        return (
            <div className="food-card">
                <img src={image} alt="" className="food-item-image"/>
                <div className="food-text">
                    <div className="food-card-header">
                        <p className="food-item-name">Hello world</p>
                        <p className="food-item-price">90 $</p>
                    </div>
                    <div className="food-item-description">
                        <p>Blah blah blah blahh!!!!!!!!!</p>
                    </div>
                </div>
            </div>
        )
    }
}
