import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className="footer shadow-lg">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.2882203399527!2d-79.55392767183788!3d43.787632058837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f9f7fb4023b%3A0xbd2f71d13d5a8b0a!2sSpice%20Inn!5e0!3m2!1sen!2sin!4v1593260214630!5m2!1sen!2sin"></iframe>
                </div>
                <div className="services">
                    <h1>Lunch</h1>
                    <p>Booking from 12:00pm — 1:30pm</p>
                    <h1>Dinner</h1>
                    <p>Booking from 12:00pm — 1:30pm</p>
                </div>
                <div className="social">
                    <h1>Follow us</h1>
                    <div className="links">
                        <a href=""><i className="fa fa-facebook-square"></i></a>
                        <a href=""><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
