import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'
import RiceAndVegCurry from '../../../assets/images/menu/rice combos/Spice Inn_GREEN PULAV.jpg'
import RiceAndPaneerCurry from '../../../assets/images/menu/rice combos/Spice Inn_GREEN PULAV.jpg'
import RiceAndButterChicken from '../../../assets/images/menu/rice combos/Spice Inn_GREEN PULAV.jpg'
import RiceAndChickenCurry from '../../../assets/images/menu/rice combos/Spice Inn_GREEN PULAV.jpg'
import NaanAndButterChicken from '../../../assets/images/menu/rice combos/Spice Inn_GREEN PULAV.jpg'

export default class RiceCombo extends Component {

   FoodItems = [
        {
            name:'Rice and Veg Curry',
            price:'$ 6.99',
            desc:'Vegetarian curry of the day served with steamed rice.',
            photo:RiceAndVegCurry
        },
        {
            name:'Rice and Paneer Curry',
            price:'$ 7.99',
            desc:'Paneer curry of the day served with steamed rice.',
            photo:RiceAndPaneerCurry
        },
        {
            name:'Rice and Butter Chicken',
            price:'$ 8.49',
            desc:'Butter Chicken curry served with steamed rice.',
            photo:RiceAndButterChicken
        },
        {
            name:'Rice and Chicken Curry',
            price:'$ 8.49',
            desc:'Chicken curry of the day served with steamed rice.',
            photo:RiceAndChickenCurry
        },
        {
            name:'Naan-Butter Chicken',
            price:'$ 8.49',
            desc:'Butter Chicken curry served with one naan.',
            photo:NaanAndButterChicken
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

