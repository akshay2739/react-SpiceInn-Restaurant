import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'
import Combo1 from '../../../assets/images/menu/lunch combos/Combo1.jpg'
import Combo2 from '../../../assets/images/menu/lunch combos/Combo2.jpg'
import Combo3 from '../../../assets/images/menu/lunch combos/Combo3.jpg'
import Combo4 from '../../../assets/images/menu/lunch combos/Combo3.jpg'

export default class LunchCombo extends Component {

    FoodItems = [
        {
            name:'Veg 1 (4 Items)',
            price:'$ 8.99',
            desc:'Paneer curry and vegetarian curry of the day served with steamed rice and one roti.',
            photo:Combo1
        },
        {
            name:'Non-veg 1 (4 Items)',
            price:'$ 9.99',
            desc:'Butter chicken and chicken curry of the day served with rice and one roti.',
            photo:Combo2
        },
        {
            name:'Veg 2 (7 Items)',
            price:'$ 11.99',
            desc:'Paneer curry and vegetarian curry of the day served with steamed rice, one naan...',
            photo:Combo3
        },
        {
            name:'Non-veg 2 (7 Items)',
            price:'$ 11.99',
            desc:'Butter chicken and chicken curry of the day served with steamed rice, one naan...',
            photo:Combo3
        },
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

