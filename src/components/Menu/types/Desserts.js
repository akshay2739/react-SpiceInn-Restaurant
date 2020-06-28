import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'
import GulabJamun from '../../../assets/images/menu/desserts/spice inn_Aloo Paratha.jpg'
import GajarHalwa from '../../../assets/images/menu/desserts/spice inn_Aloo Paratha.jpg'

export default class Desserts extends Component {

    FoodItems = [
        {
            name:'Gulab Jamun',
            price:'$ 2.99',
            desc:'Deep-fried crispy Indian dumplings with flavorful peas-potato stuffing.',
            photo:GulabJamun
        },
        {
            name:'Gajar Halwa',
            price:'$ 2.99',
            desc:'Carrot dessert cooked with milk, cream, sugar, and garnished with pistachios...',
            photo:GajarHalwa
        }
    ]

    render() {
        const foodItems = this.FoodItems.map(
            (item) => {
                return(
                    <FoodItem key={item.id} item={item}/>
                )
            }
        )
        
        return (    
            <div className="menu-wrapper">
                {
                    foodItems
                }
            </div>
        )
    }
}

