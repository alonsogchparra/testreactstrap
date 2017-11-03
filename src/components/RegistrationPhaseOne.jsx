import React, { Component } from 'react';
import {Button, Form, FormGroup, Input} from 'reactstrap';
import PlanSelection from './PlanSelection'
import LoanAssetCalculation from './LoanAssetCalculation'

import logo from '../images/LOGO_Aracar-01.svg'


class RegistrationPhaseOne extends Component {

    constructor(props) {
        super(props)
    }


    render () {

        return (
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-5 left-column" align="center">
                        <div className="mt-lg-5">
                            <h2 className="col-10 offset-col-2 mt-4 left-title">Welcome!</h2>
                        </div>
                        <div className="mt-lg-5">
                            <h1 className="left-subtitle">Applicant Information</h1>
                        </div>

                    </div>


                    <div className="col-7 right-column " align="center">

                        <div className="text-center img-aracar mt-5">
                            <img src={logo} className="rounded mx-auto d-block" alt="..."/>
                        </div>

                        <Form className="col-11 offest-col-1 mt-5">
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

                                <LoanAssetCalculation />
                                <PlanSelection />

                                <br/>

                                <Button type="submit" color="primary" disabled>APPLY</Button>
                            </FormGroup>
                        </Form>


                    </div>

                </div>
            </div>

        )
    }


}


export default RegistrationPhaseOne


