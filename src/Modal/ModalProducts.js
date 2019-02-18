import React, { Fragment } from 'react'
import './ModalProducts.css'
import uuidv4 from 'uuid/v4'

class ModalProducts extends React.Component {
    constructor() {
        super()

        this.state = {
            productsName: '',
            productsPrice: '',
            productsCreatedAt: '',
            productsDatedAt: '',
            isOpenProduct: true
        }
    }

    handleName = (event) => {
        this.setState({ productsName: event.target.value })
    }

    handlePrice = (event) => {
        this.setState({ productsPrice: event.target.value })
    }

    handleCreatedAt = (event) => {
        this.setState({ productsCreatedAt: event.target.value })
    }

    handleDatedAt = (event) => {
        this.setState({ productsDatedAt: event.target.value })
    }

    addProducts = (event) => {
        const { addCustomer } = this.props
        event.preventDefault()
        const newProductName = this.productsName.value
        const newProductPrice = this.productsPrice.value
        const newProductCreatedAt = this.productsCreatedAt.value
        const newProductDatedAt = this.productsDatedAt.value
        addCustomer(uuidv4(), newProductName, newProductPrice, newProductCreatedAt, newProductDatedAt)
        this.setState({ productsName: '', productsPrice: '', productsCreatedAt: '', productsDatedAt: '' })
    }

    toggleModalProduct = () => {
        this.setState({
            isOpenProduct: !this.state.isOpenProduct
        })
    }

    render() {

        const { isOpenProduct } = this.state;

        const { productsName, productsPrice, productsCreatedAt, productsDatedAt } = this.state

        const Modal = isOpenProduct ?
            <div className="backdropStyle">
                <div className="modalStyle">
                    <Fragment>
                        <form onSubmit={this.addProducts}>
                            <p>Name:</p>
                            <input
                                className="modalInput"
                                name="productsName"
                                value={productsName}
                                ref={(input) => {
                                    this.productsName = input
                                }}
                                onChange={this.handleName}
                            />
                            <p>Price:</p>
                            <input
                                className="modalInput"
                                name="productsPrice"
                                value={productsPrice}
                                ref={(input) => {
                                    this.productsPrice = input
                                }}
                                onChange={this.handlePrice}
                            />
                            <p>Created At:</p>
                            <input
                                className="modalInput"
                                name="productsCreatedAt"
                                value={productsCreatedAt}
                                ref={(input) => {
                                    this.productsCreatedAt = input
                                }}
                                onChange={this.handleCreatedAt}
                            />
                            <p>Dated At:</p>
                            <input
                                className="modalInput"
                                name="productsDatedAt"
                                value={productsDatedAt}
                                ref={(input) => {
                                    this.productsDatedAt = input
                                }}
                                onChange={this.handleDatedAt}
                            />
                            <input
                                type="submit"
                                value="Add" />
                        </form>
                    </Fragment>
                    <button onClick={this.toggleModalProduct}>
                        Close
                    </button>
                </div>
            </div> :
            null;

        return (
            <div>
                {Modal}
            </div>
        )
    }
}

export default ModalProducts