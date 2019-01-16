import React from 'react'
import './ModalProducts.css'
import uuidv4 from 'uuid/v4'

export default class ModalProducts extends React.Component {
    constructor() {
        super()

        this.state = {
            productsName: '',
            productsPrice: '',
            productsCreatedAt: '',
            productsDatedAt: '',
        }
    }
    handleName = (event) => {
        this.setState({productsName: event.target.value})
    }

    handlePrice = (event) => {
        this.setState({productsPrice: event.target.value})
    }

    handleCreatedAt = (event) => {
        this.setState({productsCreatedAt: event.target.value})
    }

    handleDatedAt = (event) => {
        this.setState({productsDatedAt: event.target.value})
    }

    addCProducts = (event) => {
        const { addCustomer } = this.props
        event.preventDefault()
        const newCustomerName = this.customerName.value
        const newCustomerAddress = this.customerAddress.value
        const newCustomerPhone = this.customerPhone.value
        addCustomer(uuidv4(), newCustomerName, newCustomerAddress, newCustomerPhone)
        this.setState({ customerName: '', customerAddress: '', customerPhone: '' })
    }

    render() {
        const { customerName, customerAddress, customerPhone } = this.state

        if(!this.props.show) {
            return null
        }

        return (
            <div className="backdropStyle">
                <div className="modalStyle">
                    <div>
                        <form onSubmit={this.addCustomers}>
                            <p>Name:</p>
                            <input
                                className="modalInput"
                                name="customersName"
                                value={customerName}
                                ref={(input)=>{this.customerName = input}}
                                onChange={this.handleName}
                            />
                            <p>Address:</p>
                            <input
                                className="modalInput"
                                name="customersAddress"
                                value={customerAddress}
                                ref={(input)=>{this.customerAddress = input}}
                                onChange={this.handleAddress}
                            />
                            <p>Phone:</p>
                            <input
                                className="modalInput"
                                name="customersPhone"
                                value={customerPhone}
                                ref={(input)=>{this.customerPhone = input}}
                                onChange={this.handlePhone}
                            />
                            <input
                                type="submit"
                                value="Add"/>
                        </form>
                    </div>
                    <button onClick={this.props.onClose}>
                        Close
                    </button>
                </div>
            </div>
        )
    }

}