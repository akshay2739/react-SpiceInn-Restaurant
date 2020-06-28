import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'
import Samosa from '../../../assets/images/menu/appetizers/AlooTikkiChat.jpg'
import ChholeSamosa from '../../../assets/images/menu/appetizers/SamosaChhole.jpg'
import VeggiePakoda from '../../../assets/images/menu/appetizers/SpiceInn_VegiePakora.jpg'
import PaneerPakoda from '../../../assets/images/menu/appetizers/Spiceinn_PaneerPakore.jpg'
import AlooTikki from '../../../assets/images/menu/appetizers/AlooTikkiChat.jpg'


export default class Appetizers extends Component {

   FoodItems = [
        {
            name:'Samosa',
            price:'$ 0.99',
            desc:'Deep-fried crispy Indian dumplings with flavorful peas-potato stuffing.',
            photo:Samosa
        },
        {
            name:'Chhole Samosa (2 pcs)',
            price:'$ 6.99',
            desc:'Two samosas served with chhole (channa masala), mint chutney, and sweet dip.',
            photo:ChholeSamosa
        },
        {
            name:'Veggie Pakoras',
            price:'$ 8.99',
            desc:'Chickpea flour battered deep-fried potatoes with onions and veggies.',
            photo:VeggiePakoda
        },
        {
            name:'Paneer Pakoras',
            price:'$ 10.99',
            desc:'Deep-fried and thick chickpea flour battered paneer cubes.',
            photo:PaneerPakoda
        },
        {
            name:'Aloo Tikki Chat(2 pcs)',
            price:'$ 6.99',
            desc:'Deep-fried crispy Indian dumplings with flavorful peas-potato stuffing.',
            photo:AlooTikki
        }
   ]

    
    render() {
        const foodItems = this.FoodItems.map(
            (item) => {
                return(
                    <FoodItem key={item.name} item={item}/>
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

