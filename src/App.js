import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListProduct from './page/ListProduct';
import ProductDetail from './page/ProductDetail';
import Cart from './page/Cart';
import TreeMenu from './page/TreeMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/vd" element={<TreeMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
