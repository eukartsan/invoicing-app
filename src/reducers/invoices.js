import uuidv4 from 'uuid/v4'

const initialState = {
    Invoices: [
        {
            name: 'Phone Holder',
            price: '9.99',
            id: uuidv4(),
        },
        {
            name: 'Pet Rock',
            price: '5.99',
            id: uuidv4(),
        },
    ]
};

const invoices = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_INVOICE': {
            const newInvoicing = {
                name: 'Sherlock Holmes',
                price: '20',
                id: uuidv4()
            };
            const Invoices = [...state.Invoices, newInvoicing];
            return { ...state, Invoices };
        }
        case 'DELETE_INVOICE':
            const Invoices = state.Invoices.filter((invoicing) => invoicing.id !== action.id);
            return { ...state, Invoices };
        default:
            return state.Invoices
    }
};


export default invoices