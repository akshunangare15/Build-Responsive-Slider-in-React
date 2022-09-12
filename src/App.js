import './App.css';
import Products from './components/Products';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
      
    </>
  );
}

export default App;
