import customers from './customers'
import products from './products'
import Invoices from './invoices'
import {combineReducers} from 'redux'

export default combineReducers({
    customers,
    products,
    Invoices
})