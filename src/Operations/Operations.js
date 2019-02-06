import React from 'react'
import './Operations.css'

const invoicingItem = (value) =>
    <div className="invoicing-item">
        {value}
    </div>

export default class Operations extends React.Component {
    constructor() {
        super()

        this.state = {
            price: ''
        }
    }

    selectCustomer = (event) => {
        this.props.setCustomer(event)
    }

    selectProduct = (event) => {
        this.props.setProduct(event)
    }

    addNewProduct = () => {
        //const { products } = this.props

        const name = this.setProduct.value
        const price = this.setCustomer.value
        this.props.onNewInvoicing(name, price)
        //console.log(this.props.invoicingTable)
    }

    deleteInvoicing = (id) => (event) => {
        const { onDeleted } = this.props
        event.preventDefault()
        onDeleted(id)
    }


    render() {
        const { customers, products, invoicingTable } = this.props

        const customersList = customers
            .map((item) => {
                const { name } = item

                return (
                    <option
                        key={item.id}>
                        {name}
                    </option>)
            })

        const invoicingList = invoicingTable
            .map((invoicing) => {
                const { name, price, id } = invoicing
                return (
                    <div className="invoicing-block-item" key={id}>
                        {invoicingItem(name)}
                        {invoicingItem(price)}
                        <button
                            onClick={this.deleteInvoicing(id)}
                        >Delete
                        </button>
                    </div>
                )
            })

        const productsList = products
            .map((item) => {
                return (
                    <option
                        key={item.id}>
                        {item.name}
                    </option>
                )
            })

        return (
            <div>
                <label>Customer</label>
                <select
                    onChange={this.selectCustomer}
                    ref={elem => this.setCustomer = elem}
                >
                    {customersList}
                </select>
                <div className="invoicing-container">
                    {invoicingList}
                </div>
                <label>Product to add</label>
                <select
                    ref={elem => this.setProduct = elem}
                    onChange={this.selectProduct}
                >
                    {productsList}
                </select>
                <button
                    onClick={this.addNewProduct}
                >Add
                </button>
            </div>
        )
    }
}