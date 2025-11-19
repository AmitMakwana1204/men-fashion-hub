import Home from './Pages/Home';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Shirt from './Pages/Shirt';
import Pent from './Pages/Pent';
import Login from './Pages/login'
import SignupForm from './Pages/SignupForm';
import Cart from './Pages/cart';
import { CartProvider } from './Pages/Cartcontext';


function App() {

  return (
      <CartProvider>
      <Router>
        <Navbar/>
        
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Shirt' element={<Shirt />}></Route>
        <Route path='/Pent' element={<Pent />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signupForm' element={<SignupForm/>}></Route>

        <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
      </CartProvider>
  );
}

export default App;
