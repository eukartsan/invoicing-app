import uuidv4 from 'uuid/v4'

const initialState = {
    products: [
        {
            id: uuidv4(),
            name: 'Parachute Pants',
            price: 29.99,
            createdAt: '2018-12-28 15:15:52.701 +00:00',
            updatedAt: '2018-12-28 15:15:52.701 +00:00',
            active: false
        },
        {
            id: uuidv4(),
            name: 'Phone Holder',
            price: 9.99,
            createdAt: '2018-12-28 15:15:52.701 +00:00',
            updatedAt: '2018-12-28 15:15:52.701 +00:00',
            active: false
        },
        {
            id: uuidv4(),
            name: 'Pet Rock',
            price: 5.99,
            createdAt: '2018-12-28 15:15:52.701 +00:00',
            updatedAt: '2018-12-28 15:15:52.701 +00:00',
            active: false
        },
        {
            id: uuidv4(),
            name: 'Egg Timer',
            price: 15.99,
            createdAt: '2018-12-28 15:15:52.702 +00:00',
            updatedAt: '2018-12-28 15:15:52.702 +00:00',
            active: false
        },
        {
            id: uuidv4(),
            name: 'Neon Green Hat',
            price: 21.99,
            createdAt: '2018-12-28 15:15:52.702 +00:00',
            updatedAt: '2018-12-28 15:15:52.702 +00:00',
            active: false
        },
    ]
};

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
            const products = [...state.products, newProduct];
            return { ...state, products };
        }
        case 'DELETE_PRODUCT':
            const products = state.products.filter((product) => product.id !== action.id);
            return { ...state, products };
        default:
            return state.products
    }
};


export default products