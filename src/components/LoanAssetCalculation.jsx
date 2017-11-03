import React, { Component } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input} from 'reactstrap'


class LoanAssetCalculation extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
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
            </div>
        )
    }

}

export default LoanAssetCalculation