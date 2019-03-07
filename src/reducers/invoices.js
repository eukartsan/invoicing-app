import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const invoices = (state = initialState.invoices, action) => {
    switch (action.type) {
        case 'DELETE_INVOICE':
            let newInvoices = state.slice();
            return newInvoices.filter((invoices) => invoices.id !== action.id);
        case 'CHANGE_NEW_INVOICE': {
            const newInvoices = {
                id: uuidv4(),
                name: action.name,
                discount: '20%',
                total: 500,
            };
            return [ ...state, newInvoices ];
        }
        default:
            return state
    }
};


export default invoices


