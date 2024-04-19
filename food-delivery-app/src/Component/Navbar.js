import React, {useState} from 'react';
import './Navbar.css';
import logo2 from './logo2.jpg';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
      setCartItems([...cartItems, item]);
  };
    return (
        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand text-dark" href="#">Food-Delivery</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><Link to="/">Home</Link></li>
      <li><Link to="/page1">Gallery</Link></li>
      <li><Link to="/page2">Menu</Link></li>
      <li><Link to="/aboutus">About us</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
    <form className="navbar-form navbar-left" action="/action_page.php">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search" name="search" />
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
      
      {/* <img src={logo2} alt="logo"></img> */}
    </form>
    <ul className="nav navbar-nav navbar-right ">
      
        <li>
            <Link to="/cart" className="btn btn-primary cart-button">
                Cart ({cartItems.length})
            </Link>
      </li>
      </ul>
  </div>
</nav>
    );
}
