import React, { Component } from 'react'
import Card from './Card'
import './Gallary.css'

export default class Gallary extends Component {
    render() {
        return (
            <div> 
                <ul className="cards">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /><Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </div>
        )
    }
}
