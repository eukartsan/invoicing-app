import React from 'react'
import './Products.css'
import uuidv4 from 'uuid/v4'

export default class Products extends React.Component {
    constructor() {
        super()

        this.state = {
            products:
                [{
                    id: uuidv4(),
                    name: 'Parachute Pants',
                    price: 29.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00',
                    active: false
                },
                {
                    id: uuidv4(),
                    name: 'Phone Holder',
                    price: 9.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00',
                    active: false
                },
                {
                    id: uuidv4(),
                    name: 'Pet Rock',
                    price: 5.99,
                    createdAt: '2018-12-28 15:15:52.701 +00:00',
                    updatedAt: '2018-12-28 15:15:52.701 +00:00',
                    active: false
                },
                {
                    id: uuidv4(),
                    name: 'Egg Timer',
                    price: 15.99,
                    createdAt: '2018-12-28 15:15:52.702 +00:00',
                    updatedAt: '2018-12-28 15:15:52.702 +00:00',
                    active: false
                },
                {
                    id: uuidv4(),
                    name: 'Neon Green Hat',
                    price: 21.99,
                    createdAt: '2018-12-28 15:15:52.702 +00:00',
                    updatedAt: '2018-12-28 15:15:52.702 +00:00',
                    active: false
                },
            ],
        }
    }

    deleteProduct = (id) => (event) => {
        const { onDeleted } = this.props
        event.preventDefault()
        onDeleted(id)
    }

    ProductsActive = (id) => (event) => {
        const { setProductsActive } = this.props
        event.preventDefault()
        setProductsActive(id)
    }

    editProductName = (id) => (event) => {
        const { editProductName } = this.props
        editProductName(event.target.value, id)
    }

    editProductPrice = (id) => (event) => {
        const { editProductPrice } = this.props
        editProductPrice(event.target.value, id)
    }

    editProductCreated = (id) => (event) => {
        const { editProductCreated } = this.props
        editProductCreated(event.target.value, id)
    }

    editProductUpdated = (id) => (event) => {
        const { editProductUpdated } = this.props
        editProductUpdated(event.target.value, id)
    }

    render() {
        const { products } = this.state;

        const products_list = products
            .map((item) => {
                const { id, name, price, createdAt, updatedAt, active } = item

                return (
                    <li key={id}>
                        {active
                            ? <div className="products-items">
                                <input
                                    className="products-name"
                                    onChange={this.editProductName(id)}
                                    value={name} />
                                <input
                                    className="products-price"
                                    onChange={this.editProductPrice(id)}
                                    value={price} />
                                <input
                                    className="products-createdAt"
                                    onChange={this.editProductCreated(id)}
                                    value={createdAt} />
                                <input
                                    className="products-updatedAt"
                                    onChange={this.editProductUpdated(id)}
                                    value={updatedAt} />
                                <div className="products-btn">
                                    <button onClick={this.ProductsActive(id)}>
                                        Save
                                    </button>
                                </div>
                                <div className="products-btn">
                                    <button onClick={this.deleteProduct(id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                            : <div className="products-items">
                                <div className="products-name">{name}</div>
                                <div className="products-price">{price}</div>
                                <div className="products-createdAt">{createdAt}</div>
                                <div className="products-updatedAt">{updatedAt}</div>
                                <div className="products-btn">
                                    <button onClick={this.ProductsActive(id)}>
                                        Edit
                                    </button>
                                </div>
                                <div className="products-btn">
                                    <button onClick={this.deleteProduct(id)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        }
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