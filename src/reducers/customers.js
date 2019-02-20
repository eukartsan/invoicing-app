import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const customers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_CUSTOMER': {
            const customerItems = {
                id: uuidv4(),
                name: 'Sherlock Holmes',
                address: '221B Baker Street',
                phone: '012-345-6789',
                active: false
            };
            const customers = [...state.customers, customerItems]
            return { ...state, customers }
        }
        case 'DELETE_CUSTOMER':
            const customers = state.filter((customer) => customer.id !== action.id);
            return { ...state.customers, customers };
        default:
            return state.customers
    }
};

export default customers