import React, { Fragment } from 'react'
import './Invoices.css'
import { connect } from "react-redux";

class Invoices extends React.Component {

    render() {
        const { invoices } = this.props;

        const invoices_list = invoices
            .map((item) => {
                const { id, name, discount, total } = item

                return (
                    <Fragment key={id}>
                        <div className="invoices-container">
                            <div className="invoices-item">{name}</div>
                            <div className="invoices-item">{discount}</div>
                            <div className="invoices-item">{total}</div>
                            <button className="invoices-item-btn">Edit</button>
                            <button className="invoices-item-btn">Delete</button>
                        </div>
                    </Fragment>
                )
            })

        return (
            <Fragment>
                <div className="invoices-container">
                    <div className="invoices-item-header">Customer</div>
                    <div className="invoices-item-header">Discount</div>
                    <div className="invoices-item-header">Total</div>
                </div>
                <div>
                    {invoices_list}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ invoices }) => {
    return { invoices }
};

export default connect(mapStateToProps, null)(Invoices)