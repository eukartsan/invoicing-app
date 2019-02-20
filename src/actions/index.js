import {ADD_NEW_PRODUCT, ADD_NEW_CUSTOMER, DELETE_CUSTOMER, ADD_NEW_INVOICE, DELETE_INVOICE, DELETE_PRODUCT} from './actionTypes'

export const addNewCustomers = (id) => {
    return {
        type: ADD_NEW_CUSTOMER,
        id
    };
};

const addNewProducts = (id) => {
    return {
        type: ADD_NEW_PRODUCT,
        payload: id,
    }
};

const onNewInvoice = (id) => ({
    type: ADD_NEW_INVOICE,
    id
});

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
    onNewInvoice,
}