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
            invoicingTable: [
                {
                    name: 'Phone Holder',
                    price: '9.99',
                    id: uuidv4(),
                },
                {
                    name: 'Pet Rock',
                    price: '5.99',
                    id: uuidv4(),
                },
            ],
            products: [
                {
                    id: uuidv4(),
                    name: 'Parachute Pants',
                    price: 29.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00',
                    active: false
                },
                {
                    id: uuidv4(),
                    name: 'Phone Holder',
                    price: 9.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00',
                    active: false
                },
                {
                    id: uuidv4(),
                    name: 'Pet Rock',
                    price: 5.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00',
                    active: false
                },
                {
                    id: uuidv4(),
                    name: 'Egg Timer',
                    price: 15.99,
                    createdAt: '2018-12-28 15:15:52.702 +00:00',
                    updatedAt: '2018-12-28 15:15:52.702 +00:00',
                    active: false
                },
                {
                    id: uuidv4(),
                    name: 'Neon Green Hat',
                    price: 21.99,
                    createdAt: '2018-12-28 15:15:52.702 +00:00',
                    updatedAt: '2018-12-28 15:15:52.702 +00:00',
                    active: false
                },
            ],
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
        };
    }

    selectCustomer = (event) => {
        this.setState({ customerName: event.target.value })
    }

    selectProduct = (event) => {
        this.setState({ productName: event.target.value })
    }

    NewInvoicing = (name, price, id) => {
        this.setState((prevState) => {
            const Invoicing = {
                name,
                price,
                id,
            }

            return {
                invoicingTable: [...prevState.invoicingTable, Invoicing]
            }

        })
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

    editCustomer = (name, id) => {
        const customerCopy = [...this.state.customers]
        const prevCustomer = customerCopy.find(prevCustomer => prevCustomer.id === id)
        prevCustomer.name = name
        this.setState({
            customers: customerCopy
        })
    }

    editCustomerAddress = (address, id) => {
        const customerCopy = [...this.state.customers]
        const prevCustomer = customerCopy.find(prevCustomer => prevCustomer.id === id)
        prevCustomer.address = address
        this.setState({
            customers: customerCopy
        })
    }

    editCustomerPhone = (phone, id) => {
        const customerCopy = [...this.state.customers]
        const prevCustomer = customerCopy.find(prevCustomer => prevCustomer.id === id)
        prevCustomer.phone = phone
        this.setState({
            customers: customerCopy
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

    deleteInvoicing = (id) => {
        this.setState((prevState) => {
            return {
                invoicingTable: prevState.invoicingTable.filter(el => el.id !== id)
            }
        })
    }

    setCustomerActive = (id) => {
        const customerCopy = [...this.state.customers]
        const prevCustomer = customerCopy.find(prevCustomer => prevCustomer.id === id)
        prevCustomer.active = !prevCustomer.active
        this.setState({
            customers: customerCopy
        })
    }

    setProductsActive = (id) => {
        const productsCopy = [...this.state.products]
        const prevProduct = productsCopy.find(prevProduct => prevProduct.id === id)
        prevProduct.active = !prevProduct.active
        this.setState({
            products: productsCopy
        })
    }

    editProduct = (name, id) => {
        const productsCopy = [...this.state.products]
        const prevProduct = productsCopy.find(prevProduct => prevProduct.id === id)
        prevProduct.name = name
        this.setState({
            products: productsCopy
        })
    }

    editProductPrice = (price, id) => {
        const productsCopy = [...this.state.products]
        const prevProduct = productsCopy.find(prevProduct => prevProduct.id === id)
        prevProduct.price = price
        this.setState({
            products: productsCopy
        })
    }

    editProductCreated = (createdAt, id) => {
        const productsCopy = [...this.state.products]
        const prevProduct = productsCopy.find(prevProduct => prevProduct.id === id)
        prevProduct.createdAt = createdAt
        this.setState({
            products: productsCopy
        })
    }

    editProductUpdated = (updatedAt, id) => {
        const productsCopy = [...this.state.products]
        const prevProduct = productsCopy.find(prevProduct => prevProduct.id === id)
        prevProduct.updatedAt = updatedAt
        this.setState({
            products: productsCopy
        })
    }

    render() {
        const { customers, products, invoicingTable } = this.state

        return (
            <div>
                <Customers
                    customers={customers}
                    onDeleted={this.deleteCustomer}
                    editCustomerName={this.editCustomer}
                    setCustomActive={this.setCustomerActive}
                    editCustomerAddress={this.editCustomerAddress}
                    editCustomerPhone={this.editCustomerPhone}
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
                    setProductsActive={this.setProductsActive}
                    editProductName={this.editProduct}
                    editProductPrice={this.editProductPrice}
                    editProductCreated={this.editProductCreated}
                    editProductUpdated={this.editProductUpdated}
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
                        onDeleted={this.deleteInvoicing}
                        invoicingTable={invoicingTable}
                        setCustomer={this.selectCustomer}
                        setProduct={this.selectProduct}
                        onNewInvoicing={this.NewInvoicing}
                    />
                </div>
            </div>
        )
    }
}