import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartView from './components/CartView';
import CheckOut from './components/CheckOut';
import { CartContextProvider } from './context/cartContext';
import Footer from './components/Footer';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
      <div className='font-poppins'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
          <Route path='/product/:productID' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartView/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
          <Route path='/item/:productID' element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
    </CartContextProvider>
    
  );
}

export default App;
