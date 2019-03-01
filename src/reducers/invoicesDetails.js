import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const invoice_details = (state = initialState.invoice_details, action) => {
    switch (action.type) {
        case 'SELECT_NEW_INVOICE': {
            const newInvoicing = {
                id: uuidv4(),
                name: action.name,
                price: action.price,
            };
            return [ ...state, newInvoicing ];
        }
        case 'ADD_NEW_INVOICE': {
            const newInvoicing = {
                id: uuidv4(),
                name: 'Sherlock Holmes',
                price: '20'
            };
            return [ ...state, newInvoicing ];
        }
        case 'DELETE_DETAILS_INVOICE':
            let newInvoices = state.slice();
            return newInvoices.filter((invoices) => invoices.id !== action.id);
        default:
            return state
    }
};


export default invoice_details