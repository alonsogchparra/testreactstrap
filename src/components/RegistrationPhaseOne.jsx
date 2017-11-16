import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Input } from 'reactstrap';
import axios from "axios";
import _ from 'underscore';

import PlanSelection from './PlanSelection'
import LoanAssetCalculation from './LoanAssetCalculation'

import logo from '../images/LOGO_Aracar-01.svg'

const CUIT_VALIDATOR_URL = 'http://aracar.vascarsolutions.com/backEnd/api/loan/cuitValidator/';

class RegistrationPhaseOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            cuit: '',
            cuitIsValid: null,
            mobilePhone: '',
            email: '',
            loanValue: '',
            AssetValue: '',
            AssetAge: '',
            turned: false

        };

        this.onChange = this.onChange.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.Testing = this.Testing.bind(this);
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

    onChangeInput(field, value, fn) {
        
        fn = fn ? fn : () => {};
        this.setState({
            [field]: value
        }, fn);
    }


    componentWillUpdate(nextProps, nextState) {
        if(nextState.loanValue && nextState.assetValue) {
            // la peticion que se desea realizar 
        }
    }

    Testing () {
        this.setState(() => {
            return {
                turned: !this.state.turned
            }
        });
    }

    render() {
        const { firstName, lastName, mobilePhone, email, cuit, cuitIsValid } = this.state;

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
                                            id="firstName"
                                            placeholder="Individual Borrower Name"
                                            onChange={e => this.onChangeInput('firstName', e.target.value)}
                                            />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <Input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder="Individual Borrower Last Name"
                                            onChange={e => this.onChangeInput('lastName', e.target.value)}
                                             />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <Input
                                            type="text"
                                            className={cuitIsValid ? 'form-control' : 'form-control cuitSpinner' }
                                            id="cuit"
                                            placeholder="CUIT"
                                            onChange={this.onChange.bind(this, 'cuit')} 
                                            // onChange={e => this.onChangeInput('cuit', e.target.value)}
                                            />
                                        <div className="overlay">
                                            <i className="fa fa-spinner fa-spin"></i>
                                        </div>
                                    </div>                                    
                                    <div className="form-group col-md-6">
                                        <Input
                                            type="tel"
                                            className="form-control"
                                            id="mobilePhone"
                                            placeholder="Cell Phone"
                                            onChange={e => this.onChangeInput('mobilePhone', e.target.value)} 
                                            />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <Input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        onChange={e => this.onChangeInput('email', e.target.value)} 
                                        />
                                </div>

                                <LoanAssetCalculation />
                                <PlanSelection />
                                <Button 
                                    type="submit"
                                    color="primary" 
                                    disabled
                                    >
                                    APPLY</Button>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}


export default RegistrationPhaseOne


