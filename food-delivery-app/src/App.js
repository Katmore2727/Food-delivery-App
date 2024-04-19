import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './Component/Home';
import Page1 from './Component/Page1';
import Page2 from './Component/Page2';
import Cart from './Component/Cart';
import Contact from './Component/Contact';
import Aboutus from './Component/Aboutus';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/page1' element={<Page1 />} />
        <Route exact path='/page2' element={<Page2 />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/aboutus' element={<Aboutus />} />
        <Route exact path='/contact' element={<Contact />} />

      </Routes>

      {/* <Navbar></Navbar> */}
    </div>
  );
}

export default App;
