import uuidv4 from 'uuid/v4'

const initialState = {
    customers:
        [{
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
            }]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CUSTOMERS':
            return {
                customers: [],
            };
        default:
            return state
    }
};

export default reducer