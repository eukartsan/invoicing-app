import React from 'react'
import './Invoices.css'
import { connect } from "react-redux";

class Invoices extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { invoices } = this.props;

        const invoices_list = invoices
            .map((item) => {
                const { id, name, discount, total } = item

                return (
                    <li>
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{discount}</div>
                        <div>{total}</div>
                    </li>
                )
            })

                return (
                    <div>
                    <ul>
                        {invoices_list}
                    </ul>
                    </div>
                )
            }
}

const mapStateToProps = ({ invoices }) => {
    return { invoices }
};

export default connect(mapStateToProps, null)(Invoices)