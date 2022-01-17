import React from 'react'
import "./Product.css"
import logical_reasoning from "./images/logical_reasoning.jpg"
function Product() {
	return (
    <div className="product">
      <div className="product__info">
        <p>the lean startup</p>
        <p className="product__price">
          <small>$</small>
          <bold>23.232</bold>
        </p>

        <div className="product__rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img className="product__image" src={logical_reasoning} />
      <button className="product__button">Add To Cart</button>
    </div>
  );
}

export default Product
