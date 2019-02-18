import uuidv4 from 'uuid/v4'

const initialState = {
    modalType: null,
    customers: [
        {
            id: uuidv4(),
            name: 'Mark Benson',
            address: '353 Rochester St, Rialto FL 43250',
            phone: '555-534-2342',
            active: false
        },
        {
            id: uuidv4(),
            name: 'Bob Smith',
            address: '215 Market St, Dansville CA 94',
            phone: '555-534-2177',
            active: false
        },
        {
            id: uuidv4(),
            name: 'John Draper',
            address: '890 Main St, Fontana IL 31450',
            phone: '555-534-1111',
            active: false
        },
        {
            id: uuidv4(),
            name: 'Mary Jane',
            address: '555 Vallei St, Rialto FL 43250',
            phone: '555-534-2342',
            active: false
        },
        {
            id: uuidv4(),
            name: 'Freddy Black',
            address: '777 Dorton St, Dansville CA 94',
            phone: '555-534-2177',
            active: false
        },
        {
            id: uuidv4(),
            name: 'Harry Simus ',
            address: '558 Lowpi St, Fontana IL 31450',
            phone: '555-534-1111',
            active: false
        }],
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
    ],
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
}

const reducer = (state = initialState, action) => {

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
        case 'ADD_NEW_INVOICE': {
            const newInvoicing = {
                name: 'Sherlock Holmes',
                price: '20',
                id: uuidv4()
            };
            const Invoices = [...state.Invoices, newInvoicing];
            return { ...state, Invoices };
        }
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
        case 'DELETE_CUSTOMER':
            const customers = state.customers.filter((customer) => customer.id !== action.id);
            return { ...state, customers };
        case 'DELETE_PRODUCT':
            const products = state.products.filter((product) => product.id !== action.id);
            return { ...state, products };
        case 'DELETE_INVOICE':
            const Invoices = state.Invoices.filter((invoicing) => invoicing.id !== action.id);
            return { ...state, Invoices };

        case 'CUSTOMER_MODAL_SHOW':
            return {
                modalType: true
            };
        case 'CUSTOMER_MODAL_HIDE':
            return {
                modalType: false
            };
        default:
            return state
    }
};

export default reducer