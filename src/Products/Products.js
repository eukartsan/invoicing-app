import React from 'react'
import './Products.css'
import uuidv4 from 'uuid/v4'

export default class Products extends React.Component {
    constructor() {
        super()

        this.state = {products: [
                {id: uuidv4(), name: 'Parachute Pants', price: 29.99, createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
                {id: uuidv4(), name: 'Phone Holder', price: 9.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
                {id: uuidv4(), name: 'Pet Rock', price: 5.99,  createdAt: '2018-12-28 15:15:52.701 +00:00', updatedAt: '2018-12-28 15:15:52.701 +00:00'},
                {id: uuidv4(), name: 'Egg Timer', price: 15.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'},
                {id: uuidv4(), name: 'Neon Green Hat', price: 21.99,  createdAt: '2018-12-28 15:15:52.702 +00:00', updatedAt: '2018-12-28 15:15:52.702 +00:00'},
            ]}
    }

    render() {
        const {products} = this.state

        const products_list = products
            .map((item) => {
                const {id, name, price, createdAt, updatedAt} = item

                return (
                    <li key={id} >
                        <div className="products-items">
                            <div className="products-name">{name}</div>
                            <div className="products-price">{price}</div>
                            <div className="products-createdAt">{createdAt}</div>
                            <div className="products-updatedAt">{updatedAt}</div>
                        </div>
                    </li>
                )
            })

        return (
            <div className="products">
                <ul>
                    {products_list}
                </ul>
            </div>
        )
    }
}