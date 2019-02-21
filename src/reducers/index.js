import customers from './customers'
import products from './products'
import invoices from './invoices'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    customers,
    products,
    invoices
})

export default rootReducer