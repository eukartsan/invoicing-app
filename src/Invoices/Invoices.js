import React from 'react'
import './Invoices.css'
import { connect } from "react-redux";

class Invoices extends React.Component {

    render() {
        const { invoices } = this.props;

        const invoices_list = invoices
            .map((item) => {
                const { name, discount, total } = item

                return (
                    <div className="invoices-container">
                        <div className="invoices-item">{name}</div>
                        <div className="invoices-item">{discount}</div>
                        <div className="invoices-item">{total}</div>
                    </div>
                )
            })

        return (
            <div>
                {invoices_list}
            </div>
        )
    }
}

const mapStateToProps = ({ invoices }) => {
    return { invoices }
};

export default connect(mapStateToProps, null)(Invoices)