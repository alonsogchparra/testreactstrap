import React, { Component } from 'react';
import { Button, Media } from 'reactstrap'

import logo from '../images/LOGO_Aracar-01.svg'
import checkmark from '../images/request sent_icon-01.svg'


class  InformationSent extends Component {

    render () {

        return (
            <div className="container mt-5 mb-5 pt-lg-5 pb-lg-5">
                <div className="row">
                    <div className="col-6 left-column" align="center">
                        <br/>
                        <br/>
                        <br/>
                        <div className="mt-5">
                            <h1 className="mt-5 left-subtitle">Information sent</h1>
                        </div>

                    </div>


                    <div className="col-6 right-column " align="center">

                        <div className="text-center img-aracar mt-5">
                            <img src={logo} className="rounded mx-auto d-block" alt="..."/>
                        </div>



                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col mt-lg-5 mt-md-5 mt-sm-5 mt-xl-5">

                                    <div className="mt-5 mb-5">
                                        <img src={checkmark} alt=""/>
                                    </div>

                                    <div>
                                        <h2 className="right-title-thank-you">Thank you for applying</h2>
                                    </div>

                                    <div className="mt-lg-4 mt-md-4 mt-sm-4 mt-xl-4 mb-lg-5 mb-md-5 mb-sm-5 mb-xl-5">
                                        <h6 className="will-contact">We will contact</h6>
                                    </div>

                                    <div className="mt-lg-5 mt-md-5 mt-sm-5 mt-xl-5 mb-lg-5 mb-md-5 mb-sm-5 mb-xl-5 mb-5">
                                        <Button color="primary" onClick="#">Back to the site</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default InformationSent