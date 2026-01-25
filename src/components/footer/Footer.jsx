import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum aut eum distinctio, tempora voluptatem eligendi natus earum odio voluptates tempore, ad et, possimus totam a soluta cupiditate iste? Facilis, quia.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" /><img src={assets.linkedin_icon} alt="" /><img src={assets.twitter_icon} alt="" />
                </div>
            </div>
             <div className="footer-content-centre">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
            </div>
            <div className="footer-content-right">
     <h2>
        Get in Touch</h2>
        <ul>
            <li>9414891331</li>
        <li>contact@tomato.com</li>
            </ul>
     
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2026 Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer