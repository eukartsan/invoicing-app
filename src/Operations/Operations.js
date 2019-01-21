import React from 'react'

export default class Operations extends React.Component {

    selectCustomer = (event) => {
        this.props.setCustomer(event)
    }

    selectProduct = (event) => {
        this.props.setProduct(event)
    }

    render() {
        const { customers, products } = this.props

        const customersList = customers
            .map((item) => {
                const { name } = item

                return (
                    <option
                        key={item.id}>
                        {name}
                    </option>)
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
                <label>Product to add</label>
                <select
                    onChange={this.selectProduct}
                    ref={elem => this.setProduct = elem}
                >
                    {productsList}
                </select>
            </div>
        )
    }

}