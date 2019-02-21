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
    invoices: [
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

export default initialState