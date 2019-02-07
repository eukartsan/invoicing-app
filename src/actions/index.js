const customersLoaded = (newCustomers) => {
    return {
        type: 'ADD_CUSTOMERS',
        payload: newCustomers
    }
};

const productsLoaded = (newProducts) => {
    return {
        type: 'ADD_PRODUCTS',
        payload: newProducts
    }
}

export {
    customersLoaded,
    productsLoaded
}