import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_PRODUCT': {
            const newProduct = {
                id: uuidv4(),
                name: 'Rat Hat',
                price: 50,
                createdAt: '2018-12-28 15:15:52.702 +00:00',
                updatedAt: '2018-12-28 15:15:52.702 +00:00',
                active: false
            };
            const products = [...state, newProduct];
            return { ...state.products, products };
        }
        case 'DELETE_PRODUCT':
            const products = state.filter((product) => product.id !== action.id);
            return { ...state.products, products };
        default:
            return state.products
    }
};


export default products