import uuidv4 from 'uuid/v4'

const initialState = {
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
    invoicingTable: [
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
        case 'ADD_CUSTOMERS':
            return {
                ...state,
                customers: [],
            };
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: [],
            };
        case 'ADD_OPERATION':
            return {
                ...state,
                customers: [],
                products: [],
                invoicingTable: []
            };
        case 'DELETE_CUSTOMERS':
            const customers = state.customers.filter((customer) => customer.id !== action.id);
            return { ...state, customers };
        case 'DELETE_PRODUCTS':
            const products = state.products.filter((product) => product.id !== action.id);
            return { ...state, products };
        case 'DELETE_OPERATIONS':
            const invoicingTable = state.invoicingTable.filter((invoicing) => invoicing.id !== action.id);
            return { ...state, invoicingTable };
        case 'PRODUCT_TO_INVOICING': {
            const newInvoicing = {
                name: 'Sherlock Holmes',
                price: '20',
                id: uuidv4()
            };
            const invoicingTable = [...state.invoicingTable, newInvoicing];
            return { ...state, invoicingTable };
        }
        case 'ADD_NEW_CUSTOMERS': {
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
        default:
            return state
    }
};

export default reducer