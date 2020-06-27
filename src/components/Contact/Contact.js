import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="page-name">
                  <p>Contact</p>
                </div>
                <form action="" className=" mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-3 akshay">
                      <div className="line mt-3">
                          <div className="col">
                            <input type="text" class="form-control" placeholder="First name" required/>
                          </div>
                          <div className="col">
                            <input type="text" class="form-control" placeholder="Phone"required />
                          </div>
                      </div>
                      <div className="line mt-3">
                          <div className="col">
                            <input type="email" class="form-control" placeholder="Email ID" required/>
                          </div>
                          <div className="col">
                            <input type="text" class="form-control" placeholder="Subject" required/>
                          </div>
                      </div>
                      <div className="line mt-3">
                          <div className="col">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3" required></textarea>
                          </div>
                      </div>
                      <div className="line mt-3">
                          <div className="col">
                            <button type="submit" class="btn btn-danger">Submit</button>
                          </div>
                      </div>
                  </form>
                  <div class="contact-imfo-box">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4 mt-2">
                                    <i class="fa fa-volume-control-phone" />
                                    <div class="overflow-hidden">
                                        <h4>Phone</h4>
                                        <p class="lead">
                                        +1-905-265-7474
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-2">
                                    <i class="fa fa-envelope"></i>
                                    <div class="overflow-hidden">
                                        <h4>Email</h4>
                                        <p class="lead">
                                            yourmail@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-2">
                                    <i class="fa fa-map-marker"></i>
                                    <div class="overflow-hidden">
                                        <h4>Location</h4>
                                        <p class="lead address">
                                            120 Winges Rd. Unit #13,
                                            Woodbridge, ON L4L 6A9
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
	                </div>
                  
            </div>
        )
    }
}
