const customersLoaded = (newCustomers) => {
    return {
        type: 'ADD_CUSTOMERS',
        payload: newCustomers
    }
};

export {
    customersLoaded
}