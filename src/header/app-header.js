import React from 'react'
import './app-header.css'
import { Link } from 'react-router-dom'

const AppHeader = () => {
    return (
        <div className="header-block">
            <Link to="/customers">
                <div className="header-block-item">Customers</div>
            </Link>

            <Link to="/products">
                <div className="header-block-item">Products</div>
            </Link>

            <Link to="/operations">
                <div className="header-block-item">Operations</div>
            </Link>
        </div>
    );
};

export default AppHeader