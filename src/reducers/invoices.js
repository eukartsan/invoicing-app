import initialState from './initialState'

const invoices = (state = initialState.invoices, action) => {
    switch (action.type) {
        case 'DELETE_INVOICE':
            let newInvoices = state.slice();
            return newInvoices.filter((invoices) => invoices.id !== action.id);
        default:
            return state
    }
};


export default invoices