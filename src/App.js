import React from 'react'
import Products from './Products/Products'
import Customers from './Customers/Customers'
import Operations from './Operations/Operations'
import uuidv4 from 'uuid/v4'
import ModalCustomers from './Modal/ModalCustomers'
import ModalProducts from './Modal/ModalProducts'

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            isOpenCustom: false,
            isOpenProduct: false,
            customerName: '',
            productName: '',
            products: [
                {
                    id: uuidv4(),
                    name: 'Parachute Pants',
                    price: 29.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00'
                },
                {
                    id: uuidv4(),
                    name: 'Phone Holder',
                    price: 9.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00'
                },
                {
                    id: uuidv4(),
                    name: 'Pet Rock',
                    price: 5.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00'
                },
                {
                    id: uuidv4(),
                    name: 'Egg Timer',
                    price: 15.99,
                    createdAt: '2018-12-28 15:15:52.702 +00:00',
                    updatedAt: '2018-12-28 15:15:52.702 +00:00'
                },
                {
                    id: uuidv4(),
                    name: 'Neon Green Hat',
                    price: 21.99,
                    createdAt: '2018-12-28 15:15:52.702 +00:00',
                    updatedAt: '2018-12-28 15:15:52.702 +00:00'
                },
            ],
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

    selectCustomer = (event) => {
        this.setState({ customerName: event.target.value })
    }

    selectProduct = (event) => {
        this.setState({ productName: event.target.value })
    }

    toggleModalCustom = () => {
        this.setState({
            isOpenCustom: !this.state.isOpenCustom
        })
    }

    toggleModalProduct = () => {
        this.setState({
            isOpenProduct: !this.state.isOpenProduct
        })
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

    addProduct = (id, name, price, createdAt, updatedAt) => {
        this.setState((prevState) => {
            const newProduct = {
                id,
                name,
                price,
                createdAt,
                updatedAt
            }

            return {
                products: [...prevState.products, newProduct]
            }
        })
    }

    deleteCustomer = (id) => {
        this.setState((prevState) => {
            return {
                customers: prevState.customers.filter(el => el.id !== id)
            }
        })
    }

    deleteProduct = (id) => {
        this.setState((prevState) => {
            return {
                products: prevState.products.filter(el => el.id !== id)
            }
        })
    }

    render() {
        const { customers, products } = this.state

        return (
            <div>
                <Customers
                    customers={customers}
                    onDeleted={this.deleteCustomer}
                />
                <div>
                    <button onClick={this.toggleModalCustom}>
                        Add new customers
                    </button>
                    <ModalCustomers
                        show={this.state.isOpenCustom}
                        onClose={this.toggleModalCustom}
                        addCustomer={this.addCustomer}>
                    </ModalCustomers>
                </div>
                <Products
                    products={products}
                    onDeleted={this.deleteProduct}
                />
                <div>
                    <button onClick={this.toggleModalProduct}>
                        Add new product
                    </button>
                    <ModalProducts
                        show={this.state.isOpenProduct}
                        onClose={this.toggleModalProduct}
                        addCustomer={this.addProduct}>
                    </ModalProducts>
                    <Operations
                        customers={customers}
                        products={products}
                        setCustomer={this.selectCustomer}
                        setProduct={this.selectProduct}
                    />
                </div>

            </div>
        )
    }
}