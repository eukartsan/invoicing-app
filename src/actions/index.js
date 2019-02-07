const customersLoaded = (newCustomers) => {
    return {
        type: 'ADD_CUSTOMERS',
        payload: newCustomers
    }
};

const productsLoaded = (newProducts) => {
    return {
        type: 'ADD_PRODUCTS',
        payload: newProducts,
    }
};

const operationLoaded = (newOperation) => {
    return {
        type: 'ADD_OPERATION',
        payload: newOperation
    }
}

export {
    customersLoaded,
    productsLoaded,
    operationLoaded
}