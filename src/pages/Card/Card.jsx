import React, { useContext } from 'react';
import './Card.css';
import { StoreContext } from '../../context/StoreContext';

const Card = () => {
  const { cardItems, food_list, removeFromCart , getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="card">
      <div className="card-items">
        <div className="card-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list.map((item) => {
          // check if this item is in the cart
          if (cardItems[item._id] > 0) {
            return (
              <div>
              <div
                className="card-items-item"
                key={item._id}
              >
                <img src={item.image} alt={item.name} className="item-image" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cardItems[item._id]}</p>
                <p>${item.price * cardItems[item._id]}</p>
                
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
                
              </div>
              <hr />
              </div>
            );
          }
          return null;
        })}
        
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>delivery fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          
          </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
        <div>
          <p>If you have a promo code , Enter it here</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
