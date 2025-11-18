import React, { useContext } from 'react';
import { FaRegStarHalfStroke, FaStar , FaCartArrowDown , FaShare } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CardContext } from '../context/CardContect';
import { FaCheck } from "react-icons/fa";






function Product(item) {
  const{cartItems,  addToCart} = useContext(CardContext)
  const isInCart = cartItems.some(i => i.id === item.item.id);

 
  return (
    <div className={`product ${isInCart ? 'in-cart' : ' '}`}>
     <Link to={`/products/${item.item.id}`}>

     <span className='status_cart'><FaCheck /> in cart
</span>
      
        <div className="img_product">
        <img 
        src={item.item.images[0]} alt="phone" />
      </div>
      <p className='name_product'>{item.item.title}</p>
      <div className="stars">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStarHalfStroke />
    </div>
    <p className='price'><span>$ {item.item.price}</span></p>
     </Link>
    <div className="icons">
  <span className='btn_cart' onClick={() => addToCart(item.item)}>
    <FaCartArrowDown />
  </span>
  <span className='heart'><CiHeart /></span>
  <span className='share'><FaShare/></span>
</div>

    


 
    </div>
    ) 
}

export default Product
