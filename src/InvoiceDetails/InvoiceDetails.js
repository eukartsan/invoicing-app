import React from 'react'
import './InvoiceDetails.css'
import { connect } from 'react-redux';
import { onDeleteInvoice, onNewInvoice } from '../actions';

const invoicingItem = (value) =>
    <div className="invoicing-item">
        {value}
    </div>

class InvoiceDetails extends React.Component {
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

    deleteInvoicing = (id) => () => {
        this.props.handleOnDelInvoice(id)
    }

    addNewInvoice = (id) => (event) => {
        event.preventDefault();
        this.props.handleOnAddNewInvoice(id)
    }


    render() {
        const { customers, products, Invoices } = this.props;

        const customersList = customers
            .map((item) => {
                const { name } = item;

                return (
                    <option
                        key={item.id}>
                        {name}
                    </option>)
            })

        const invoicingList = Invoices
            .map((invoicing) => {
                const { name, price, id } = invoicing
                return (
                    <div className="invoicing-block-item" key={id}>
                        {invoicingItem(name)}
                        {invoicingItem(price)}
                        <button
                            onClick={this.deleteInvoicing(id)}>Delete
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
                    ref={elem => this.setCustomer = elem}>
                    {customersList}
                </select>
                <div className="invoicing-container">
                    {invoicingList}
                </div>
                <label>Product to add</label>
                <select
                    ref={elem => this.setProduct = elem}
                    onChange={this.selectProduct}>
                    {productsList}
                </select>
                <button
                    onClick={this.addNewProduct}>Add
                </button>
                <div className="products-btn">
                    <button onClick={this.addNewInvoice()}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ products, customers, Invoices }) => {
    return { products, customers, Invoices }
};

const mapDispatchToProps = dispatch => {
    return {
        handleOnDelInvoice: (id) => dispatch(onDeleteInvoice(id)),
        handleOnAddNewInvoice: (id) => dispatch(onNewInvoice(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceDetails)