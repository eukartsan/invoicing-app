import React from 'react'
import './Customers.css'

import { connect } from 'react-redux'
import {customersLoaded} from '../actions'

class Customers extends React.Component {

    // componentDidMount() {
    //     const {
    //         InvoicingService,
    //         customersLoaded
    //     } = this.props;
    //     InvoicingService.getCustomers()
    //         .then((customers) => customersLoaded(customers)
    // }


    deleteCustomer = (id) => (event) => {
        const { onDeleted } = this.props
        event.preventDefault()
        onDeleted(id)
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

    render() {
        const { customers } = this.props;

        const customers_list = customers
            .map((item) => {
                const { id, name, address, phone, active } = item
                return (
                    <li key={id}>
                        {active
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
                                        className="customers-button"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={this.deleteCustomer(id)}
                                        className="customers-button"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        }
                    </li>)
            })

        return (
            <div className="customers">
                <ul>
                    {customers_list}
                </ul>
            </div>
        )
    }
}

const mapStateToProps =({customers}) => {
    return {customers}
};

const mapDispatchToProps = {
    customersLoaded
}

export default connect (mapStateToProps, mapDispatchToProps) (Customers)