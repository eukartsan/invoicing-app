import customers from './customers'
import products from './products'
import Invoices from './invoices'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    customers,
    products,
    Invoices
})

export default rootReducer