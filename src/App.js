import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import Navbar from './components/Navbar';
import store from './store/Store';
import { CartPage } from './pages/CartPage';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
