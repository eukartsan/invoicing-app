import React from 'react'
import Products from './Products/Products'
import Customers from './Customers/Customers'
import uuidv4 from 'uuid/v4'

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            customers:
                [{
                    id: uuidv4(),
                    name: 'Mark Benson',
                    address: '353 Rochester St, Rialto FL 43250',
                    phone: '555-534-2342'
                },
                    {
                        id: uuidv4(),
                        name: 'Bob Smith',
                        address: '215 Market St, Dansville CA 94',
                        phone: '555-534-2177'
                    },
                    {
                        id: uuidv4(),
                        name: 'John Draper',
                        address: '890 Main St, Fontana IL 31450',
                        phone: '555-534-1111'
                    },
                    {
                        id: uuidv4(),
                        name: 'Mary Jane',
                        address: '555 Vallei St, Rialto FL 43250',
                        phone: '555-534-2342'
                    },
                    {
                        id: uuidv4(),
                        name: 'Freddy Black',
                        address: '777 Dorton St, Dansville CA 94',
                        phone: '555-534-2177'
                    },
                    {
                        id: uuidv4(),
                        name: 'Harry Simus ',
                        address: '558 Lowpi St, Fontana IL 31450',
                        phone: '555-534-1111'
                    }]
        };
    }

    addCustomer = (id, name, address, phone) => {
        this.setState((prevState) => {
            const newCustomer = {
                id,
                name,
                address,
                phone
            }

            return {
                customers: [...prevState.customers, newCustomer]
            }
        })
    }

    render() {
        const {customers} = this.state

        return (
            <div>
                <Customers
                    customers={customers}
                    addCustomer={this.addCustomer}
                />
                <Products/>
            </div>
        )
    }
}