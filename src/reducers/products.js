import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const products = (state = initialState.products, action) => {
    switch (action.type) {
        case 'ADD_NEW_PRODUCT': {
            const newProduct = {
                id: uuidv4(),
                name: action.name,
                price: action.price,
                createdAt: action.createdAt,
                updatedAt: action.updatedAt,
                active: false
            };
            return [ ...state, newProduct ];
        }
        case 'DELETE_PRODUCT':
            let newProduct = state.slice();
            return newProduct.filter((products) => products.id !== action.id);
        default:
            return state
    }
};

export default products