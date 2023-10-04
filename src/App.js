import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListProduct from './page/ListProduct';
import ProductDetail from './page/ProductDetail';
import Cart from './page/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
