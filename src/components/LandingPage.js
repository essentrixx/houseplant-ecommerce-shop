import React from 'react';

const LandingPage = ({ setCurrentPage }) => {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1 className="landing-title">Green Haven</h1>
                <p className="landing-description">
                    Welcome to Green Haven, your premier destination for beautiful houseplants that transform your living space into a lush oasis.
                    We specialize in hand-selected, healthy plants perfect for both beginners and experienced plant parents.
                    Our collection features everything from low-maintenance succulents to stunning statement pieces,
                    all chosen to bring natural beauty and fresh air into your home.
                </p>
                <button
                    onClick={() => setCurrentPage('products')}
                    className="get-started-btn"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default LandingPage;