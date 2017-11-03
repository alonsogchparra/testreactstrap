import React from 'react';
import {Button, Media, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

import logo from '../aracar-front.png'

const RegistrationPhaseOne = () => {

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-5 left-column" align="center">
                    <div>
                        <h2 className="col-10 offset-col-2 mt-4 left-title">Welcome!</h2>
                    </div>
                    <div className="mt-lg-5">
                        <h1 className="left-subtitle">Applicant Information</h1>
                    </div>

                </div>


                <div className="col-7 right-column " align="center">

                    <div className="text-center img-aracar mt-4">
                        <img src={logo} className="rounded mx-auto d-block" alt="..."/>
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
                                        <DropdownMenu>
                                            <DropdownItem header>Header</DropdownItem>
                                            <DropdownItem disabled>Action</DropdownItem>
                                            <DropdownItem>Another Action</DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                <div className="form-group col-md-3">
                                    <Input type="text" className="form-control" id="inputCity"/>
                                </div>

                            </div>

                            <div>
                                <h6 className="plan-title">Plans</h6>
                                <p className="plan-subtitle">Choose your plan</p>
                            </div>


                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col">
                                        <div className="grid-title">Term</div>
                                        <br/>
                                        <div className="grid-title">Weekly payment</div>
                                        <br/>
                                        <div className="grid-title">Minimum net income</div>
                                    </div>
                                    <div className="col">
                                        <div className="grid-title">24 months</div>
                                        <br/>
                                        <div className="list-group border">
                                            <a className="list-group-item-action">
                                                <p>8888UVAS</p>
                                                <hr className="hr-plan" />
                                                <p>$8888</p>
                                                <hr className="hr-plan" />
                                                <p>$8888</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="grid-title">36 months</div>
                                        <br/>
                                        <div className="list-group border">
                                            <a className="list-group-item-action">
                                                <p>8888UVAS</p>
                                                <hr className="hr-plan"/>
                                                <p>$8888</p>
                                                <hr className="hr-plan"/>
                                                <p>$8888</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="grid-title">48 months</div>
                                        <br/>
                                        <div className="list-group border">
                                            <a className="list-group-item-action">
                                                <p>8888UVAS</p>
                                                <hr className="hr-plan" />
                                                <p>$8888</p>
                                                <hr className="hr-plan" />
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


