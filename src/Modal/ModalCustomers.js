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
                        <form onSubmit={this.addNewCustomers}>
                            <p>Name:</p>
                            <input
                                className="modalInput"
                                name="customersName"
                                value={customerName}
                                ref={(input) => {
                                    this.customerName = input
                                }}
                                onChange={this.handleName}
                            />
                            <p>Address:</p>
                            <input
                                className="modalInput"
                                name="customersAddress"
                                value={customerAddress}
                                ref={(input) => {
                                    this.customerAddress = input
                                }}
                                onChange={this.handleAddress}
                            />
                            <p>Phone:</p>
                            <input
                                className="modalInput"
                                name="customersPhone"
                                value={customerPhone}
                                ref={(input) => {
                                    this.customerPhone = input
                                }}
                                onChange={this.handlePhone}
                            />
                            <input type="submit" value="Add" />
                        </form>
                    </Fragment>
                    <button onClick={this.toggleModalCustomer}>
                        Close
                    </button>
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