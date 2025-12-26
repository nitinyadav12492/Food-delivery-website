import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin, setSearchQuery }) => {
  const [menu, setMenu] = useState("home")
  const [showSearch, setShowSearch] = useState(false)
  const { getTotalCartAmount } = useContext(StoreContext)

  // Close search when user presses Escape
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setShowSearch(false)
    }
  }

  return (
    <div className='navbar'>
      <Link to="/"><img src={assets.logo} alt="logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        {/* Search Input */}
        {showSearch ? (
          <input
            type="text"
            className="navbar-search-input active"
            placeholder="Search food..."
            autoFocus
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <img
            src={assets.search_icon}
            alt="search"
            onClick={() => setShowSearch(true)}
            className="navbar-search-icon"
          />
        )}

        {/* Cart */}
        <div className="navbar-cart">
          <Link to="/card"><img src={assets.basket_icon} alt="cart" /></Link>
          {getTotalCartAmount() > 0 && <div className="cart-dot"></div>}
        </div>

        {/* Sign In Button */}
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
