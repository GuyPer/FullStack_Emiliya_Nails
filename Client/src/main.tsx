import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter as Router} from 'react-router-dom';
import ThemeProvider from './context/ThemeContext.tsx';
import SearchProvider from './context/SearchContext.tsx';
import ToastsProvider from './context/ToastsContext.tsx';
import AuthProvider from './context/AuthContext.tsx';
import LikedProductsProvider from './context/LikedProductContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <SearchProvider>
      <LikedProductsProvider>
      <ToastsProvider>
        <AuthProvider>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  </AuthProvider>
  </ToastsProvider>
  </LikedProductsProvider>
  </SearchProvider>
  </ThemeProvider>
)
