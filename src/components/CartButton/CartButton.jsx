import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartButton.css';
import AppContext from '../../context/AppContext';


function CartButton() {

  const { cartItems, setIsCartVisible, isCartVisible } = useContext(AppContext);

  return (
    <button type="button" className="cart__button" onClick={() => setIsCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <span className="card-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;
