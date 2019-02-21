import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const customers = (state = initialState.customers, action) => {
    switch (action.type) {
        case 'ADD_NEW_CUSTOMER':
            const customerItems = {
                id: uuidv4(),
                name: action.name,
                address: action.address,
                phone: action.phone,
                active: false
            };
            return [...state, customerItems]
        case 'DELETE_CUSTOMER':
            const customers = state.filter((customer) => customer.id !== action.id);
            return { ...state, customers };
        default:
            return state
    }
};

export default customers