import React from 'react'
import './Products.css''

export default class Products extends React.Component {

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