import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import './App.css';

// Lazy loading to optimize performance
const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));

const App = () => {
  return (
    <Router> {/* Set up the Router for the app */}
      <Header /> 

      <Suspense fallback={<div>Loading...</div>}> {/* Show loading state while lazy-loaded */}
        <Routes>

          {/* route the path */}

          <Route path="/" element={<ProductList />} /> 
          <Route path="/product/:id" element={<ProductDetail />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
