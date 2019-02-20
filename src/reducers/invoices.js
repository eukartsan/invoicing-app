import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const invoices = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_INVOICE': {
            const newInvoicing = {
                name: 'Sherlock Holmes',
                price: '20',
                id: uuidv4()
            };
            const Invoices = [...state, newInvoicing];
            return { ...state.Invoices, Invoices };
        }
        case 'DELETE_INVOICE':
            const Invoices = state.filter((invoicing) => invoicing.id !== action.id);
            return { ...state.Invoices, Invoices };
        default:
            return state.Invoices
    }
};


export default invoices