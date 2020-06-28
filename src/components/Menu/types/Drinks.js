import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'
import Lassi from '../../../assets/images/menu/drinks/Lassi.jpg'
import DryFruitLassi from '../../../assets/images/menu/drinks/Lassi.jpg'
import PopWater from '../../../assets/images/menu/drinks/Lassi.jpg'
import Perrier from '../../../assets/images/menu/drinks/Lassi.jpg'


export default class Drinks extends Component {

    FoodItems = [
        {
            name:'Sweet/Salted Lassi',
            price:'$ 2.99',
            desc:'Sweet / Salted yogurt drink',
            photo:Lassi
        },
        {
            name:'Mango/Dry Fruit Lassi',
            price:'$ 4.99',
            desc:'Sweet Mango flavored yogurt drink / Sweet yogurt drink topped with almonds and...',
            photo:DryFruitLassi
        },
        {
            name:'Pop/Bottled Water',
            price:'$ 1.49',
            desc:'Coke / Pepsi / Diet Coke / Diet Pepsi / Ginger Ale / Orange Crush / Root Beer / Dr...',
            photo:PopWater
        },
        {
            name:'Perrier/Gatorade',
            price:'$ 1.99',
            desc:'Carrot dessert cooked with milk, cream, sugar, and garnished with pistachios...',
            photo:Perrier
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

