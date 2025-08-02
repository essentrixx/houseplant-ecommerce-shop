import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListingPage from './components/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage';
import './App.css';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
      <>
        {currentPage === 'landing' && <LandingPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && <ProductListingPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'cart' && <ShoppingCartPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'header' && <Header setCurrentPage={setCurrentPage} />}
      </>
  );
}

function App() {
  return (
      <Provider store={store}>
        <AppContent />
      </Provider>
  );
}

export default App;