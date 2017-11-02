import React from 'react';
import { Button, Media } from 'reactstrap'


const InformationSent = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 left-column" align="center">
                    <div>
                        <h1 className="mt-5 left-title">Information sent</h1>
                    </div>

                </div>


                <div className="col-6 right-column " align="center">

                    <div class="text-center img-aracar mt-4">
                        <img src="https://snag.gy/r7zhqW.jpg" class="rounded mx-auto d-block" alt="..."/>
                    </div>



                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col mt-lg-5 mt-md-5 mt-sm-5 mt-xl-5">

                                <div>
                                    <img src="https://snag.gy/xpzLnV.jpg" alt=""/>
                                </div>

                                <div>
                                    <h1>Thank you for applying</h1>
                                </div>

                                <div className="mt-lg-4 mt-md-4 mt-sm-4 mt-xl-4 mb-lg-5 mb-md-5 mb-sm-5 mb-xl-5">
                                    <h7>We will contact</h7>
                                </div>

                                <div className="mt-lg-5 mt-md-5 mt-sm-5 mt-xl-5 mb-lg-5 mb-md-5 mb-sm-5 mb-xl-5">
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

export default InformationSent