import React from 'react';
import {Button, Media, Form, FormGroup, Input, Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import Logo from '../images/LOGO_Aracar-01.svg'


const RegistrationPhaseOne = () => {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5 left-column" align="center">
                    <h1 className="col-10 offset-col-2 mt-4 left-title">Welcome</h1>
                    <h2 className="left-subtitle">Applicant Information</h2>
                </div>


                <div className="col-7 right-column " align="center">

                    <div class="text-center img-aracar mt-4">
                        <img src="https://snag.gy/r7zhqW.jpg" class="rounded mx-auto d-block" alt="..."/>
                    </div>

                    <Form className="col-10 offest-col-2">
                        <Media src="https://snag.gy/r7zhqW.jpg"/>
                        <br/>
                        <FormGroup>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Input type="text" className="form-control" id="inputName4"
                                           placeholder="Individual Borrower Name"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <Input type="text" className="form-control" id="inputLastName4"
                                           placeholder="Individual Borrower Last Name"/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <Input type="text" className="form-control" id="inputCuit4" placeholder="CUIT"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <Input type="text" className="form-control" id="inputCellPhone4"
                                           placeholder="Cell Phone"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <Input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-3">
                                    <Input type="text" className="form-control" id="inputCity"
                                           placeholder="Loan Value"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <Input type="text" className="form-control" id="inputCity"
                                           placeholder="Asset Value"/>
                                </div>

                                <div className="form-group col-md-3">
                                    <Dropdown group size="md">
                                        <DropdownToggle caret className="btn-select">
                                            Car Age
                                        </DropdownToggle>
                                    </Dropdown>
                                </div>
                                <div className="form-group col-md-3">
                                    <Input type="text" className="form-control" id="inputCity"/>
                                </div>

                            </div>

                            <div>
                                <h6>Plans</h6>
                                <h7>Choose your plan</h7>
                            </div>


                            <div className="container">
                                <div className="row align-items-start">
                                    <div className="col-3">
                                        <div>Term</div>
                                        <br/>
                                        <div>Weekly payment</div>
                                        <br/>
                                        <div>Minimum net income</div>
                                    </div>
                                    <div className="col-3">
                                        <div>24 months</div>
                                        <br/>
                                        <div className="list-group border">
                                            <a className="list-group-item list-group-item-action">
                                                <p>8888UVAS</p>
                                                <p>$8888</p>
                                                <p>$8888</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div>36 months</div>
                                        <br/>
                                        <div className="list-group border">
                                            <a className="list-group-item list-group-item-action">
                                                <p>8888UVAS</p>
                                                <p>$8888</p>
                                                <p>$8888</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div>48 months</div>
                                        <br/>
                                        <div className="list-group border">
                                            <a className="list-group-item list-group-item-action">
                                                <p>8888UVAS</p>
                                                <p>$8888</p>
                                                <p>$8888</p>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <br/>
                            <Button type="submit" color="primary">APPLY</Button>
                        </FormGroup>
                    </Form>


                </div>


            </div>
        </div>



    )

}


export default RegistrationPhaseOne


