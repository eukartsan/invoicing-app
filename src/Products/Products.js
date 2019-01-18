import React from 'react'
import './Products.css'

export default class Products extends React.Component {

    deleteProduct = (id) => (event) => {
        const { onDeleted } = this.props
        event.preventDefault()
        onDeleted(id)
    }

    render() {
        const {products} = this.props

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
                            <div className="products-btn">
                                <button onClick={this.deleteProduct(id)}>
                                    Delete
                                </button>
                            </div>
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