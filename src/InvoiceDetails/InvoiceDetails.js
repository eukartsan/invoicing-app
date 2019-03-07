import React from 'react'
import './InvoiceDetails.css'
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4'
import {
    onDeleteDetailsInvoice,
    changeNewInvoice,
    onNewInvoice,
    selectNewInvoice,
    onInvoicesIncrement,
    onInvoicesDecrement
} from '../actions';
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
            customerSelected: ''
            //price: '30'
        }
    }

    addNewInvoice = (id) => (event) => {
        event.preventDefault();
        this.props.handleOnAddNewInvoice(id)
    }

    changeNewInvoice = () => {
        const { handleChangeNewInvoice } = this.props;
        const selectInvoiceName = this.state.customerSelected
        handleChangeNewInvoice(uuidv4(), selectInvoiceName)
    }

    deleteInvoicing = (id) => () => {
        this.props.handleOnDelInvoice(id)
    }

    quantityIncrement = (id) => () => {
        this.props.handleOnInvoicesIncrement(id)
    }

    quantityDecrement = (id) => () => {
        this.props.handleOnInvoicesDecrement(id)
    }

    selectNewProduct = (event) => {
        const { onSelectNewInvoice } = this.props;
        event.preventDefault();
        const selectInvoiceName = this.setProduct.value;
        const selectInvoicePrice = this.state.price;
        onSelectNewInvoice(uuidv4(), selectInvoiceName, selectInvoicePrice)
        console.log(selectInvoiceName)
    }

    selectNewCustomer = () => {
        const selectCustomer = this.setCustomer.value;
        this.setState({ customerSelected: selectCustomer })
    }

    changeDiscount = (event) => {
        if (/^(100|[1-9]|[1-9][0-9])$/.test(event.target.value)) {
            this.setState({
                discount: parseInt(event.target.value, 10)
            })
        }
    }

    render() {
        const { customers, products, invoice } = this.props;
        const { discount, customerSelected } = this.state;

        const customersList = customers
            .map((item) => {
                const { id, name } = item;

                return (
                    <option
                        key={id}>
                        {name}
                    </option>
                )
            })

        const invoicingList = invoice
            .map((invoice_details) => {
                const { id, name, price, quantity } = invoice_details;
                const total = price * quantity;
                const totals = total.toFixed(2);

                return (
                    <div className="invoicing-block-item" key={id}>
                        {invoicingItem(name)}
                        {invoicingItem(price)}
                        {invoicingItem(quantity)}
                        <div className="invoicing-block-operators">
                            <button
                                onClick={this.quantityIncrement(id)}
                            >&#8743;
                            </button>
                            <button
                                onClick={this.quantityDecrement(id)}
                            >&#8744;
                            </button>
                        </div>
                        {invoicingItem(totals)}
                        <button
                            onClick={this.deleteInvoicing(id)}>Delete
                        </button>
                    </div>
                )
            })

        const productsList = products
            .map((item) => {
                const { id, name } = item;
                return (
                    <option
                        key={id}>
                        {name}
                    </option>
                )
            })

        return (
            <div className="invoicing">
                <div className="invoicing-items">
                    <Invoices />
                    <h1>Invoice Details</h1>
                    <label>Customer</label>
                    <select
                        //onChange={this.selectCustomer}
                        ref={elem => this.setCustomer = elem}>
                        {customersList}
                    </select>
                    <button
                        onClick={this.selectNewCustomer}>Select
                    </button>
                </div>
                <div className="invoicing-items">
                    <label>Product to add</label>
                    <select
                        //onChange={this.selectProduct}
                        ref={elem => this.setProduct = elem}>
                        {productsList}
                    </select>
                    <button
                        onClick={this.selectNewProduct}>Select
                    </button>
                </div>
                <label>Customer: </label>
                {customerSelected}
                <div className="invoices-details-header">
                    <div className="invoices-details-name">Product</div>
                    <div className="invoices-details-address">Price</div>
                    <div className="invoices-details-quantity">Quantity</div>
                    <div className="invoices-details-total">Total</div>
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
                    <button
                        onClick={this.changeNewInvoice}
                    >
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

const mapStateToProps = ({ products, customers, invoice_details }) => {
    return { products, customers, invoice: invoice_details }
};

const mapDispatchToProps = dispatch => {
    return {
        handleOnDelInvoice: (id) => dispatch(onDeleteDetailsInvoice(id)),
        handleOnInvoicesIncrement: (id) => dispatch(onInvoicesIncrement(id)),
        handleOnInvoicesDecrement: (id) => dispatch(onInvoicesDecrement(id)),
        handleOnAddNewInvoice: (id) => dispatch(onNewInvoice(id)),
        handleChangeNewInvoice: (id, name) => dispatch(changeNewInvoice(id, name)),
        onSelectNewInvoice: (id, name, price) => dispatch(selectNewInvoice(id, name, price)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceDetails)
