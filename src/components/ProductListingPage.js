import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import Header from './Header';

const ProductListingPage = ({ setCurrentPage }) => {
    const plants = useSelector(state => state.plants);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const isInCart = (plantId) => {
        return cart.some(item => item.id === plantId);
    };

    const handleAddToCart = (plant) => {
        if (!isInCart(plant.id)) {
            dispatch(addToCart(plant));
        }
    };

    // Group plants by category
    const categories = plants.reduce((acc, plant) => {
        if (!acc[plant.category]) {
            acc[plant.category] = [];
        }
        acc[plant.category].push(plant);
        return acc;
    }, {});

    return (
        <div className="products-page">
            <Header setCurrentPage={setCurrentPage} />
            <div className="products-container">
                <h1 className="page-title">Our Plant Collection</h1>

                {Object.entries(categories).map(([category, categoryPlants]) => (
                    <div key={category} className="category-section">
                        <h2 className="category-title">{category}</h2>
                        <div className="products-grid">
                            {categoryPlants.map(plant => (
                                <div key={plant.id} className="product-card">
                                    <div className="product-image-container">
                                        <div className="product-image">{plant.image}</div>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product-name">{plant.name}</h3>
                                        <p className="product-description">{plant.description}</p>
                                        <div className="product-footer">
                                            <span className="product-price">${plant.price}</span>
                                            <button
                                                onClick={() => handleAddToCart(plant)}
                                                disabled={isInCart(plant.id)}
                                                className={`add-to-cart-btn ${isInCart(plant.id) ? 'disabled' : 'active'}`}
                                            >
                                                {isInCart(plant.id) ? 'In Cart' : 'Add to Cart'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListingPage;