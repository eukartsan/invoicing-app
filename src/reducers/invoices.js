import initialState from './initialState'

const invoices = (state = initialState.invoices, action) => {
    switch (action.type) {
        case 'DELETE_INVOICE':
            const invoices = state.filter((invoicing) => invoicing.id !== action.id);
            return { ...state, invoices };
        default:
            return state
    }
};


export default invoices