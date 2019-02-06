import React from 'react'
import './Customers.css'
import uuidv4 from 'uuid/v4'

export default class Customers extends React.Component {
    constructor() {
        super()

        this.state = {
            customers:
                [{
                    id: uuidv4(),
                    name: 'Mark Benson',
                    address: '353 Rochester St, Rialto FL 43250',
                    phone: '555-534-2342',
                    active: false
                },
                    {
                        id: uuidv4(),
                        name: 'Bob Smith',
                        address: '215 Market St, Dansville CA 94',
                        phone: '555-534-2177',
                        active: false
                    },
                    {
                        id: uuidv4(),
                        name: 'John Draper',
                        address: '890 Main St, Fontana IL 31450',
                        phone: '555-534-1111',
                        active: false
                    },
                    {
                        id: uuidv4(),
                        name: 'Mary Jane',
                        address: '555 Vallei St, Rialto FL 43250',
                        phone: '555-534-2342',
                        active: false
                    },
                    {
                        id: uuidv4(),
                        name: 'Freddy Black',
                        address: '777 Dorton St, Dansville CA 94',
                        phone: '555-534-2177',
                        active: false
                    },
                    {
                        id: uuidv4(),
                        name: 'Harry Simus ',
                        address: '558 Lowpi St, Fontana IL 31450',
                        phone: '555-534-1111',
                        active: false
                    }]
        }
    }

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
        const { customers } = this.state;

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