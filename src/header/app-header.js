import React from 'react'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return (
        <div>
        <ul>
            <li>
                <Link to="/customers">Customers</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
        </ul>
        </div>
    );
};

export default AppHeader