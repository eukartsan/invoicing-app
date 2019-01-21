import React from 'react'

export default class Operations extends React.Component {

    selectCustomer = (event) => {
        this.props.setCustomer(event)
    }

    render() {
        const {customers} = this.props
        const customersList = customers
            .map((item) => {
                const {name} = item

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
            </div>
        )
    }

}