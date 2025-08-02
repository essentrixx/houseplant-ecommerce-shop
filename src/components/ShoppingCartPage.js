import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/actions/cartActions';
import Header from './Header';

const ShoppingCartPage = ({ setCurrentPage }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart-page">
            <Header setCurrentPage={setCurrentPage} />
            <div className="cart-container">
                <h1 className="page-title">Shopping Cart</h1>

                <div className="cart-content">
                    <div className="cart-summary">
                        <h2 className="summary-text">
                            Total Items: <span className="summary-value">{totalItems}</span>
                        </h2>
                        <h2 className="summary-text">
                            Total Cost: <span className="summary-value">${totalCost.toFixed(2)}</span>
                        </h2>
                    </div>

                    {cart.length === 0 ? (
                        <p className="empty-cart">Your cart is empty</p>
                    ) : (
                        <div className="cart-items">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-info">
                                        <div className="cart-item-image">{item.image}</div>
                                        <div className="cart-item-details">
                                            <h3>{item.name}</h3>
                                            <p>${item.price} each</p>
                                        </div>
                                    </div>

                                    <div className="cart-item-controls">
                                        <div className="quantity-controls">
                                            <button
                                                onClick={() => dispatch(decrementQuantity(item.id))}
                                                className="quantity-btn"
                                            >
                                                -
                                            </button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button
                                                onClick={() => dispatch(incrementQuantity(item.id))}
                                                className="quantity-btn"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                            className="delete-btn"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="cart-actions">
                    <button
                        onClick={() => setCurrentPage('products')}
                        className="continue-shopping-btn"
                    >
                        Continue Shopping
                    </button>
                    <button
                        onClick={() => alert('Coming Soon!')}
                        className="checkout-btn"
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartPage;