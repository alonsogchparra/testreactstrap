import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';
import axios from "axios";

import PlanSelection from './PlanSelection'
import LoanAssetCalculation from './LoanAssetCalculation'

import logo from '../images/LOGO_Aracar-01.svg'

const CUIT_VALIDATOR_URL = 'http://aracar.vascarsolutions.com/backEnd/api/loan/cuitValidator/';

class RegistrationPhaseOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            lastName: '',
            cuit: '',
            cuitIsValid: null,
            phone: '',
            email: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(field, e) {
        let newState = this.state;

        if (field === 'cuit') {
            if (e.target.value) {
                // activa overlay
                // utilizar debounce
                // debounce hace que no hagan tantas peticiones por input
                axios.post(CUIT_VALIDATOR_URL, {
                    cuit: e.target.value
                }).then((response) => {
                    this.setState({ cuitIsValid: response.data.message });
                    // desactiva overlay
                }).catch((error) => {
                    this.setState({ cuitIsValid: false });
                    // desactiva overlay
                });
            } else {
                this.setState({ cuitIsValid: null });
            }
        }

        newState[field] = e.target.value;

        this.setState(newState);
    }

    render() {
        const { cuitIsValid } = this.state;

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
                            <img src={logo} className="rounded mx-auto d-block" alt="..." />
                        </div>

                        <Form className="col-11 offest-col-1 mt-5">
                            {(() => {
                                if (cuitIsValid || typeof cuitIsValid !== 'boolean') {
                                    return null;
                                }

                                return <Alert color="danger">CUIT Invalid</Alert>;
                            })()}
                            <FormGroup>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="inputName4"
                                            placeholder="Individual Borrower Name"
                                            onChange={this.onChange.bind(this, 'name')} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="inputLastName4"
                                            placeholder="Individual Borrower Last Name"
                                            onChange={this.onChange.bind(this, 'lastName')} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="inputCuit4"
                                            placeholder="CUIT"
                                            onChange={this.onChange.bind(this, 'cuit')} />
                                        <div className="overlay">
                                            <i className="fa fa-spinner fa-spin"></i>
                                        </div>
                                    </div>                                    
                                    <div className="form-group col-md-6">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="inputCellPhone4"
                                            placeholder="Cell Phone"
                                            onChange={this.onChange.bind(this, 'phone')} />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <Input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder="Email"
                                        onChange={this.onChange.bind(this, 'email')} />
                                </div>

                                <LoanAssetCalculation />
                                <PlanSelection />

                                <br />

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


