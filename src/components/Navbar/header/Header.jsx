import React from 'react'
import { useNavigate } from "react-router-dom";
import"./Header.css"
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='header'>
         <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectabe array of dishes crafted with th finest ingredients and culinary expertise . our mission is to satisy yur craving amd elevate your dinner experience , one delicious meal at a time </p>
            <button onClick={() => navigate("/explore")}>
      Explore Menu
    </button>
         </div>

    </div>
  )
}

export default Header