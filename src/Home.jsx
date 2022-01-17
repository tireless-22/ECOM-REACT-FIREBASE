import React from 'react'
import home_image from './images/home_image.jpg'
import "./Home.css"
import Product from './Product'

function Home() {
	return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={home_image} />

        <div className="home__row">
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          <Product />

        </div>
      </div>
    </div>
  );
}

export default Home
