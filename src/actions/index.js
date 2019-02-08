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
};

const onDeleteCustomers = (id) => ({
    type: 'DELETE_CUSTOMERS',
    id
});

const onDeleteProducts = (id) => ({
    type: 'DELETE_PRODUCTS',
    id
});

export {
    customersLoaded,
    productsLoaded,
    operationLoaded,
    onDeleteCustomers,
    onDeleteProducts
}