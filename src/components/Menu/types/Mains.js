import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'
import ChickenBiryani from '../../../assets/images/menu/mains/SpiceInn_Pav Bhaji.jpg'
import ChholeBhature from '../../../assets/images/menu/mains/SpiceInn_Pav Bhaji.jpg'
import VegCurry from '../../../assets/images/menu/mains/SpiceInn_Pav Bhaji.jpg'
import BUtterChicken from '../../../assets/images/menu/mains/SpiceInn_Pav Bhaji.jpg'
import ChickenCurry from '../../../assets/images/menu/mains/SpiceInn_Pav Bhaji.jpg'
import PaneerCurry from '../../../assets/images/menu/mains/SpiceInn_Pav Bhaji.jpg'
import DaalCurry from '../../../assets/images/menu/mains/SpiceInn_Pav Bhaji.jpg'
import SteamedRice from '../../../assets/images/menu/mains/SpiceInn_Pav Bhaji.jpg'

export default class Mains extends Component {

    FoodItems = [
        {
            name:'Chicken Biryani',
            price:'$ 8.99',
            desc:'Basmati rice cooked with tender boneless chicken and gravy.',
            photo:ChickenBiryani
        },
        {
            name:'Chhole Bhature',
            price:'$ 8.49',
            desc:'Chhole (channa masala) served with two deep-fried pieces of soft bread.',
            photo:ChholeBhature
        },
        {
            name:'Vegetarian Curry',
            price:'$ 5.99',
            desc:'Veg curry of the day.',
            photo:VegCurry
        },
        {
            name:'Butter Chicken',
            price:'$ 6.99',
            desc:'Tender boneless chicken cooked in creamy buttery tomato gravy.',
            photo:BUtterChicken
        },{
            name:'Chicken Curry',
            price:'$ 6.99',
            desc:'Chicken curry of the day.',
            photo:ChickenCurry
        },
        {
            name:'Paneer Curry of the Day',
            price:'$ 6.99',
            desc:'Paneer (Indian cottage cheese) curry of the day.',
            photo:PaneerCurry
        },
        {
            name:'Daal Curry of the Day',
            price:'$ 11.99',
            desc:'Lentil curry of the day.',
            photo:DaalCurry
        },
        {
            name:'Steamed Rice',
            price:'$ 3.99',
            desc:'Traditional basmati rice.',
            photo:SteamedRice
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

