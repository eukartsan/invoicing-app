import React from 'react'
import './InvoiceDetails.css'
import { connect } from 'react-redux';
import { onDeleteInvoice, onNewInvoice } from '../actions';
import Invoices from '../Invoices/Invoices'

const invoicingItem = (value) =>
    <div className="invoicing-item">
        {value}
    </div>

class InvoiceDetails extends React.Component {
    constructor() {
        super()

        this.state = {
            price: '',
            discount: '',
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

    changeDiscount = (event) => {
        if (/^(100|[1-9]|[1-9][0-9])$/.test(event.target.value)) {
            this.setState({
                discount: parseInt(event.target.value, 10)
            })
        }
    }


    render() {
        const { customers, products, invoices } = this.props;
        const { discount } = this.state;

        const customersList = customers
            .map((item) => {
                const { name } = item;

                return (
                    <option
                        key={item.id}>
                        {name}
                    </option>)
            })

        const invoicingList = invoices
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
            <div className="invoicing">
                <div className="invoicing-items">
                    <h1>Invoices</h1>
                    <Invoices/>
                    <h1>Invoice Details</h1>
                    <label>Customer</label>
                    <select
                        onChange={this.selectCustomer}
                        ref={elem => this.setCustomer = elem}>
                        {customersList}
                    </select>
                    <button
                        onClick={this.addNewProduct}>Select
                    </button>
                </div>
                <div className="invoicing-items">
                    <label>Product to add</label>
                    <select
                        ref={elem => this.setProduct = elem}
                        onChange={this.selectProduct}>
                        {productsList}
                    </select>
                    <button
                        onClick={this.addNewProduct}>Select
                    </button>
                </div>
                <div className="invoicing-container">
                    {invoicingList}
                </div>
                <div className="invoicing-discount">
                    <label>Discount</label>
                    <input
                        ref={(input) => {
                            this.discount = input
                        }}
                        value={discount}
                        onChange={this.changeDiscount}
                    />
                </div>
                <div className="products-btn">
                    <button onClick={this.addNewInvoice()}>
                        Add
                    </button>
                </div>
                <div>
                    <button>
                        Save
                    </button>
                    <button>
                        Cancel
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ products, customers, invoices }) => {
    return { products, customers, invoices }
};

const mapDispatchToProps = dispatch => {
    return {
        handleOnDelInvoice: (id) => dispatch(onDeleteInvoice(id)),
        handleOnAddNewInvoice: (id) => dispatch(onNewInvoice(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceDetails)