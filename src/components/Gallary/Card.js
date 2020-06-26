import React, { Component } from 'react';
import image from '../../assets/images/img-02.jpg'
import './Gallary.css'

class Card extends Component {
    render() {
        return (
            <li class="cards_item">
                <div class="card">
                    <div class="card_image"><img src={image} /></div>
                    <div class="card_content">
                        <h2 class="card_title">Card Grid Layout</h2>
                        <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Card;
