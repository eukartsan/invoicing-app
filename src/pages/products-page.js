import React from 'react'
import Products from '../Products/Products'
import Operations from '../InvoiceDetails/InvoiceDetails'
import ModalProducts from "../Modal/ModalProducts";

const ProductsPage = () => {

    return (
        <div>
            <Products/>
            <ModalProducts/>
            <Operations/>
        </div>
    );
};

export default ProductsPage