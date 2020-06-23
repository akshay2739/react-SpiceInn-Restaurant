import React, { Component } from 'react'
import FoodItem from './FoodItem'
import '../Menu.css'

export default class LunchCombo extends Component {

    state = {
        items: []
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10')
            .then(response => response.json())
            .then(json => this.setState({items:json}) )
    }

    render() {
        const foodItems = this.state.items.map(
            (item) => {
                return(
                    <FoodItem key={item.id} item={item}/>
                )
            }
        )
        console.log(this.state.items)
        return (    
            <div className="menu-wrapper">
                {
                    foodItems
                }
            </div>
        )
    }
}

