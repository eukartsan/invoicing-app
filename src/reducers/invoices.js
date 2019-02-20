import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const invoices = (state = initialState.Invoices, action) => {
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
            const Invoices = state.filter((invoicing) => invoicing.id !== action.id);
            return { ...state, Invoices };
        default:
            return state
    }
};


export default invoices