import React from 'react'
import './Products.css'
import { addNewProducts, onDeleteProducts } from '../actions';
import { connect } from 'react-redux';

class Products extends React.Component {

    deleteProduct = (id) => () => {
        this.props.handleOnDelProducts(id)
    };

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

    addNewProduct = (id) => (event) => {
        event.preventDefault();
        this.props.handleOnAddNewProduct(id)
    }

    render() {
        const { products } = this.props;

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
            });

        return (
            <div className="products">
                <ul>
                    {products_list}
                </ul>
                <div>
                    <button onClick={this.addNewProduct()}>
                        Add Product
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ products }) => {
    return { products }
};

const mapDispatchToProps = dispatch => {
    return {
        handleOnDelProducts: (id) => dispatch(onDeleteProducts(id)),
        handleOnAddNewProduct: (id) => dispatch(addNewProducts(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)