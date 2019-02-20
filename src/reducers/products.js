import initialState from './initialState'
import uuidv4 from 'uuid/v4'

const products = (state = initialState.products, action) => {
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
            return [ ...state, newProduct ];
        }
        case 'DELETE_PRODUCT':
            const products = state.filter((product) => product.id !== action.id);
            return { ...state, products };
        default:
            return state
    }
};


export default products