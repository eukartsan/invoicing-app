import customers from './customers'
import products from './products'
import invoice_details from './invoicesDetails'
import invoices from './invoices'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    customers,
    products,
    invoices,
    invoice_details
})

export default rootReducer