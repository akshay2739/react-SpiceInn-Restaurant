import React, { Component } from 'react'
import './FoodItem.css'
import image from '../../../assets/images/img-01.jpg'

export default class FoodItem extends Component {
    render() {
        const item = this.props.item
        return (
            <div className="food-item-wrapper gallery-single">
                <img src={image} className="food-image" alt=""/>
                <div className="why-text">
							<h4>Special Drinks 2</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $9.79</h5>
				</div>
            </div>
        )
    }
}
