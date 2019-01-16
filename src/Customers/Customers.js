import React from 'react'
import './Customers.css'

export default class Customers extends React.Component {

    render() {
        const { customers } = this.props

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
            </div>
        )
    }
}