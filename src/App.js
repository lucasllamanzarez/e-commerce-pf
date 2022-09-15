//CSS App Default
import './App.css';
//BARRA NAV
import Navbar from './components/NavBar/Navbar';
//REACT ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//VISTAS
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';
import ItemDetail from './Views/ItemDetail/ItemDetail';
import CartWidget from './components/Cartwidget/Cartwidget';
//CONTEXT
import CartProvider from './components/Cartwidget/Cartcontext';

const App = () => {
  return (
      <Router>
          <div className="App">
          <CartProvider>
              <Navbar />
              <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/detail/:id' element={<ItemDetail />}/>
                    <Route path='/cart' element={<CartWidget />}/>
              </Routes>
          </CartProvider>
          </div>
      </Router>
  );
}

export default App;
