import React from 'react'
import './Operations.css'

const invoicingItem = (value) =>
    <div className="invoicing-item">
        {value}
    </div>

export default class Operations extends React.Component {

    selectCustomer = (event) => {
        this.props.setCustomer(event)
    }

    selectProduct = (event) => {
        this.props.setProduct(event)
    }

    addNewProduct = () => {
        const Name = this.setProduct.value
        this.props.onNewInvoicing(Name)
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
            const {name, price, id} = invoicing
            return (
                <div className="invoicing-block-item" key={id}>
                    {invoicingItem(name)}
                    {invoicingItem(price)}
                </div>
            )
        })


        const productsList = products
            .map((item) => {
                const { name } = item

                return (
                    <option
                        key={item.id}>
                        {name}
                    </option>)
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
                    onChange={this.selectProduct}
                    ref={elem => this.setProduct = elem}
                >
                    {productsList}
                </select>
                <button
                    // onClick={this.addNewProduct}
                >Add</button>
            </div>
        )
    }

}