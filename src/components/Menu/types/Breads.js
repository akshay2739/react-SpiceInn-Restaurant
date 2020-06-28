import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'
import Roti from '../../../assets/images/menu/bread/spice inn_Aloo Paratha.jpg'
import ButterNaan from '../../../assets/images/menu/bread/spice inn_Aloo Paratha.jpg'
import GarlicNaan from '../../../assets/images/menu/bread/spice inn_Aloo Paratha.jpg'
import Bhatture from '../../../assets/images/menu/bread/spice inn_Aloo Paratha.jpg'
export default class Breads extends Component {

   FoodItems = [
        {
            name:'Chappati (Roti)',
            price:'$ 0.99',
            desc:'Traditional Indian whole wheat bread served with butter.',
            photo:Roti
        },
        {
            name:'Butter Naan',
            price:'$ 1.99',
            desc:'Traditional Indian tandoori bread served with butter.',
            photo:ButterNaan
        },
        {
            name:'Garlic Naan',
            price:'$ 2.49',
            desc:'Traditional Indian tandoori bread topped with garlic and cilantro.',
            photo:GarlicNaan
        },
        {
            name:'Bhatture',
            price:'$ 1.99',
            desc:'Deep-fried soft bread.',
            photo:Bhatture
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

