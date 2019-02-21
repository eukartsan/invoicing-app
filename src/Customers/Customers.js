import React from 'react'
import './Customers.css'

import { connect } from 'react-redux'
import { onDeleteCustomers, addNewCustomers } from '../actions'
import ModalCustomers from "../Modal/ModalCustomers";

class Customers extends React.Component {
    constructor() {
        super()

        this.state = {
            isOpenCustomer: false
        };
    }

    deleteCustomer = (id) => () => {
        this.props.handleOnDelCustomers(id)
    }

    editCustomerName = (id) => (event) => {
        const { editCustomerName } = this.props
        editCustomerName(event.target.value, id)
    }

    editCustomerAddress = (id) => (event) => {
        const { editCustomerAddress } = this.props
        editCustomerAddress(event.target.value, id)
    }

    editCustomerPhone = (id) => (event) => {
        const { editCustomerPhone } = this.props
        editCustomerPhone(event.target.value, id)
    }

    CustomActive = (id) => (event) => {
        const { setCustomActive } = this.props
        event.preventDefault()
        setCustomActive(id)
    }

    toggleModalCustomer = () => {
        this.setState({
            isOpenCustomer: !this.state.isOpenCustomer
        })
    }

    addNewCustomers = (id) => (event) => {
        event.preventDefault()
        this.props.handleOnAddCustomers(id)
    }

    render() {

        const { customers } = this.props;

        const customers_list = customers
            .map((item) => {
                const { id, name, address, phone, active } = item
                return (
                    <li key={id}>{
                        active
                            ? <div className="customers-items">
                                <input
                                    className="customers-name"
                                    onChange={this.editCustomerName(id)}
                                    value={name} />
                                <input
                                    className="customers-address"
                                    onChange={this.editCustomerAddress(id)}
                                    value={address} />
                                <input
                                    className="customers-phone"
                                    onChange={this.editCustomerPhone(id)}
                                    value={phone} />
                                <div className="customers-btn">
                                    <button
                                        className="customers-button"
                                        onClick={this.CustomActive(id)}>
                                        Save
                                    </button>
                                    <button
                                        className="customers-button"
                                        onClick={this.deleteCustomer(id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            : <div className="customers-items">
                                <div className="customers-name">
                                    {name}
                                </div>
                                <div className="customers-address">{address}</div>
                                <div className="customers-phone">{phone}</div>
                                <div className="customers-btn">
                                    <button
                                        onClick={this.CustomActive(id)}
                                        className="customers-button">
                                        Edit
                                    </button>
                                    <button
                                        onClick={this.deleteCustomer(id)}
                                        className="customers-button">
                                        Delete
                                    </button>
                                </div>
                            </div>}
                    </li>)
            });

        const { isOpenCustomer } = this.state;

        const Modal = isOpenCustomer ?
            <div>
                <ModalCustomers
                />
            </div> :
            null;

        return (

            <div className="customers">
                <h1>Customers</h1>
                <ul>
                    {customers_list}
                </ul>
                <button
                    onClick={this.toggleModalCustomer}>
                    Add new customer
                </button>
                {Modal}
            </div>
        )
    }
}

const mapStateToProps = ({customers}) => {
    return { customers }
};

const mapDispatchToProps = dispatch => {
    return {
        handleOnDelCustomers: (id) => dispatch(onDeleteCustomers(id)),
        handleOnAddCustomers: (id) => dispatch(addNewCustomers(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers)