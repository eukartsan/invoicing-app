import {ADD_NEW_PRODUCT, ADD_NEW_CUSTOMER, DELETE_CUSTOMER, ADD_NEW_INVOICE, DELETE_INVOICE, DELETE_PRODUCT} from './actionTypes'

const addNewCustomers = (id) => {
    return {
        type: ADD_NEW_CUSTOMER,
        payload: id
    };
};

const addNewProducts = (id) => {
    return {
        type: ADD_NEW_PRODUCT,
        payload: id,
    }
};

const onNewInvoice = (id) => {
    return {
    type: ADD_NEW_INVOICE,
    payload: id
}};

const onDeleteCustomers = (id) => ({
    type: DELETE_CUSTOMER,
    id
});

const onDeleteProducts = (id) => ({
    type: DELETE_PRODUCT,
    id
});

const onDeleteInvoice = (id) => ({
    type: DELETE_INVOICE,
    id
});

export {
    addNewProducts,
    onDeleteCustomers,
    onDeleteProducts,
    onDeleteInvoice,
    addNewCustomers,
    onNewInvoice,
}