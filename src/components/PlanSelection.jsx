import React, { Component } from 'react'

class PlanSelection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            planTwentyFour: [10 ,20 ,30],
            planThirtySix: [40,50,60],
            planFortyEight: [70, 80, 90]
        }
    }

    render() {

        return (

            <div className="mt-5 mb-3">
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
                                    <p className="mt-3">{this.state.planTwentyFour[0]} UVAS</p>
                                    <hr className="hr-plan" />
                                    <p>${this.state.planTwentyFour[1]}</p>
                                    <hr className="hr-plan" />
                                    <p>${this.state.planTwentyFour[2]}</p>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="grid-title">36 months</div>
                            <br/>
                            <div className="list-group border">
                                <a className="list-group-item-action">
                                    <p className="mt-3">{this.state.planThirtySix[0]}UVAS</p>
                                    <hr className="hr-plan"/>
                                    <p>${this.state.planThirtySix[1]}</p>
                                    <hr className="hr-plan"/>
                                    <p>${this.state.planThirtySix[2]}</p>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div 
                            className="grid-title"
                            onClick={this.props.Testing}>48 months</div>
                            <br/>
                            <div className="list-group border">
                                <a className="list-group-item-action">
                                    <p className="mt-3">{this.state.planFortyEight[0]}UVAS</p>
                                    <hr className="hr-plan" />
                                    <p>${this.state.planFortyEight[1]}</p>
                                    <hr className="hr-plan" />
                                    <p>${this.state.planFortyEight[2]}</p>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        )
    }


}

export default PlanSelection