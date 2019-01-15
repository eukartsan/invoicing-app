import React from 'react'
import './Customers.css'
import uuidv4 from 'uuid/v4'

export default class Customers extends React.Component {
    constructor() {
        super()

        this.state = {
            customerName: '',
            customerAddress: '',
            customerPhone: ''
        }
    }

    handleName = (event) => {
        this.setState({customerName: event.target.value})
    }

    handleAddress = (event) => {
        this.setState({customerAddress: event.target.value})
    }

    handlePhone = (event) => {
        this.setState({customerPhone: event.target.value})
    }

    addCustomers = (event) => {
        const { addCustomer } = this.props
        event.preventDefault()
        const newCustomerName = this.customerName.value
        const newCustomerAddress = this.customerAddress.value
        const newCustomerPhone = this.customerPhone.value
        addCustomer(uuidv4(), newCustomerName, newCustomerAddress, newCustomerPhone)
        this.setState({ customerName: '', customerAddress: '', customerPhone: '' })
    }

    render() {
        const { customers } = this.props
        const { customerName, customerAddress, customerPhone } = this.state

        const customers_list = customers
            .map((item) => {
                const { id, name, address, phone } = item

                return (
                    <li key={id}>
                        <div className="customers-items">
                            <div className="customers-name">{name}</div>
                            <div className="customers-address">{address}</div>
                            <div className="customers-phone">{phone}</div>
                        </div>
                    </li>
                )
            })

        return (
            <div className="customers">
                <ul>
                    {customers_list}
                </ul>
                <div>
                    <form onSubmit={this.addCustomers}>
                        <input
                            name="customersName"
                            value={customerName}
                            ref={(input)=>{this.customerName = input}}
                            onChange={this.handleName}
                        />
                        <input
                            name="customersAddress"
                            value={customerAddress}
                            ref={(input)=>{this.customerAddress = input}}
                            onChange={this.handleAddress}
                        />
                        <input
                            name="customersPhone"
                            value={customerPhone}
                            ref={(input)=>{this.customerPhone = input}}
                            onChange={this.handlePhone}
                        />
                    <input type="submit" value="Add"/>
                    </form>
                </div>
            </div>
        )
    }
}