import React from 'react'
import { Route } from 'react-router-dom'
import AppHeader from './header/app-header'
import { CustomersPage, ProductsPage, OperationsPage } from './pages'
import { BrowserRouter as Router } from 'react-router-dom'

export default class App extends React.Component {
    constructor() {
        super()

        this.state = {
            isOpenCustom: false,
            isOpenProduct: false,
            customerName: '',
            productName: ''
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

        return (
            <div>
                <Router>
                    <div>
                        <AppHeader />
                        <Route
                            path="/customers"
                            component={CustomersPage}
                        />
                        <Route
                            path="/products"
                            component={ProductsPage}
                        />
                        <Route
                            path="/operations"
                            component={OperationsPage}
                        />
                    </div>
                </Router>
                {/*<Products*/}
                    {/*products={products}*/}
                    {/*onDeleted={this.deleteProduct}*/}
                    {/*setProductsActive={this.setProductsActive}*/}
                    {/*editProductName={this.editProduct}*/}
                    {/*editProductPrice={this.editProductPrice}*/}
                    {/*editProductCreated={this.editProductCreated}*/}
                    {/*editProductUpdated={this.editProductUpdated}*/}
                {/*/>*/}
                <div>
                    {/*<button onClick={this.toggleModalProduct}>*/}
                        {/*Add new product*/}
                    {/*</button>*/}
                    {/*<ModalProducts*/}
                        {/*show={this.state.isOpenProduct}*/}
                        {/*onClose={this.toggleModalProduct}*/}
                        {/*addCustomer={this.addProduct}>*/}
                    {/*</ModalProducts>*/}
                    {/*<Operations*/}
                        {/*customers={customers}*/}
                        {/*products={products}*/}
                        {/*onDeleted={this.deleteInvoicing}*/}
                        {/*invoicingTable={invoicingTable}*/}
                        {/*setCustomer={this.selectCustomer}*/}
                        {/*setProduct={this.selectProduct}*/}
                        {/*onNewInvoicing={this.NewInvoicing}*/}
                    {/*/>*/}
                </div>
            </div>
        )
    }
}