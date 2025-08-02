import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ setCurrentPage }) => {
    const cart = useSelector(state => state.cart);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="header">
            <div className="header-content">
                <button
                    onClick={() => setCurrentPage('landing')}
                    className="logo"
                >
                    🌿 Green Haven
                </button>
                <nav className="nav">
                    <button
                        onClick={() => setCurrentPage('products')}
                        className="nav-link"
                    >
                        Shop Plants
                    </button>
                    <button
                        onClick={() => setCurrentPage('cart')}
                        className="nav-link"
                    >
                        <div className="cart-icon-wrapper">
                            <svg className="cart-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="cart-count">
                {totalItems}
              </span>
                        </div>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;