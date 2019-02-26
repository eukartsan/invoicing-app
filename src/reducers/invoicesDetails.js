import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const invoice_details = (state = initialState.invoice_details, action) => {
    switch (action.type) {
        case 'ADD_NEW_INVOICE': {
            const newInvoicing = {
                name: 'Sherlock Holmes',
                price: '20',
                id: uuidv4()
            };
            return [ ...state, newInvoicing ];
        }
        case 'DELETE_INVOICE':
            const invoices = state.filter((invoicing) => invoicing.id !== action.id);
            return [ ...state, invoices ];
        default:
            return state
    }
};


export default invoice_details