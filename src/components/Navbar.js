import React, { useRef } from 'react';
import Logo from "../assets/images/logo.png";
import { cart } from "../Data";

const Navbar = () => {
  const searchRef = useRef(); // Properly initialize the ref
  const cartRef = useRef();
  const navbarRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <img src={Logo} alt="Logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#blogs">Blogs</a>
        </nav>
        <div className="icons">
          <div className="fa fa-search" onClick={searchHandler}></div>
          <div className="fas fa-shopping-cart"   onClick={cartHandler}></div>
          <div className="fa fa-bars" id="menu-btn" onClick={navbarHandler}></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" placeholder="search here ..." id="search-box" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span className="fas fa-times"></span>
              <img src={item.img} alt="" />
              <div className='content'>
                <h3>Cart Item 01</h3>

                <div className="price">$15.99/-</div>
               </div>
               </div>
              

               
          ))}
          <a href="/" className='btn'>
          Checkout Now
          </a>
         </div>
       
      </header>
    </div>
  );
};

export default Navbar;
