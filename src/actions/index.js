import {ADD_NEW_PRODUCT, ADD_NEW_CUSTOMER, CHANGE_NEW_INVOICE, INVOICES_DECREMENT, INVOICES_INCREMENT, SELECT_NEW_INVOICE, DELETE_CUSTOMER, DELETE_DETAILS_INVOICE, ADD_NEW_INVOICE, DELETE_INVOICE, DELETE_PRODUCT} from './actionTypes'

export const addNewCustomers = (id, name, address, phone) => {
    return {
        type: ADD_NEW_CUSTOMER,
        id,
        name,
        address,
        phone
    };
};

const selectNewInvoice = (id, name, price) => {
    return {
        type: SELECT_NEW_INVOICE,
        id,
        name,
        price
    };
};

const addNewProducts = (id, name, price, createdAt, updatedAt) => {
    return {
        type: ADD_NEW_PRODUCT,
        id,
        name,
        price,
        createdAt,
        updatedAt
    }
};

const onNewInvoice = (id) => ({
    type: ADD_NEW_INVOICE,
    id
});

const changeNewInvoice = (id, name) => ({
    type: CHANGE_NEW_INVOICE,
    id,
    name
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

const onDeleteDetailsInvoice = (id) => ({
    type: DELETE_DETAILS_INVOICE,
    id
});

const onInvoicesIncrement = (id) => ({
    type: INVOICES_INCREMENT,
    id
});

const onInvoicesDecrement = (id) => ({
    type: INVOICES_DECREMENT,
    id
});

export {
    addNewProducts,
    onDeleteCustomers,
    onDeleteProducts,
    onDeleteInvoice,
    onNewInvoice,
    onDeleteDetailsInvoice,
    selectNewInvoice,
    onInvoicesIncrement,
    onInvoicesDecrement,
    changeNewInvoice
}