import React, { Fragment } from 'react'
import './ModalCustomers.css'
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import { addNewCustomers} from "../actions";

class ModalCustomers extends React.Component {
    constructor() {
        super()

        this.state = {
            customerName: '',
            customerAddress: '',
            customerPhone: '',
            isOpenCustomer: true
        }
    }

    handleName = (event) => {
        this.setState({ customerName: event.target.value })
    }

    handleAddress = (event) => {
        this.setState({ customerAddress: event.target.value })
    }

    handlePhone = (event) => {
        this.setState({ customerPhone: event.target.value })
    }

    addNewCustomers = (event) => {
        const { addCustomer } = this.props
        event.preventDefault()
        const newCustomerName = this.customerName.value
        const newCustomerAddress = this.customerAddress.value
        const newCustomerPhone = this.customerPhone.value
        addCustomer(uuidv4(), newCustomerName, newCustomerAddress, newCustomerPhone)
    }

    toggleModalCustomer = () => {
        this.setState({
            isOpenCustomer: !this.state.isOpenCustomer
        })
    }

    render() {

        const { isOpenCustomer } = this.state;

        const { customerName, customerAddress, customerPhone } = this.props

        const Modal = isOpenCustomer ?
            <div className="backdropStyle">
                <div className="modalStyle">
                    <Fragment>
                        <form
                            className="modal-container-form"
                            onSubmit={this.addNewCustomers}>
                            <div className="modal-container-header">
                                <div className="modal-container-item-name">Name:</div>
                                <div className="modal-container-item-address">Address:</div>
                                <div className="modal-container-item-phone">Phone:</div>
                            </div>
                            <div className="modal-container-header">
                                <input
                                    className="modal-container-input"
                                    name="customersName"
                                    value={customerName}
                                    ref={(input) => {
                                        this.customerName = input
                                    }}
                                    onChange={this.handleName}
                                />
                                <input
                                    className="modal-container-input"
                                    name="customersAddress"
                                    value={customerAddress}
                                    ref={(input) => {
                                        this.customerAddress = input
                                    }}
                                    onChange={this.handleAddress}
                                />
                                <input
                                    className="modal-container-input"
                                    name="customersPhone"
                                    value={customerPhone}
                                    ref={(input) => {
                                        this.customerPhone = input
                                    }}
                                    onChange={this.handlePhone}
                                />
                            </div>
                            <input type="submit" value="Add" />
                            <button
                                className="modal-container-btn"
                                onClick={this.toggleModalCustomer}>
                                Close
                            </button>
                        </form>
                    </Fragment>
                </div>
            </div> :
            null;

        return (
            <div>
                {Modal}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCustomer: (id, name, address, phone) => dispatch(addNewCustomers(id, name, address, phone)),
    }
};

export default connect(null, mapDispatchToProps)(ModalCustomers)