import React from 'react'
import './Home.css'
import Product from './Product/Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
                    alt="home image" />

                <div className="home__row">
                    <Product
                        id="123123"
                        title="The Body: A Guide for Occupants"
                        price={14.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41aIidpbKwL._AC_SX184_.jpg"
                        rating={4}
                    />
                    <Product
                        id="123124"
                        title="Me: Elton John Official Autobiography"
                        price={50.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51y8+fZ4bcL._AC_SX184_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="123125"
                        title="A Promised Land"
                        price={100.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._AC_SX184_.jpg"
                        rating={5}
                    />
                    <Product
                        id="123126"
                        title="The Try Not to Laugh Challenge - Would Your…"
                        price={77.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51o7tQnySSL._AC_SX184_.jpg"
                        rating={3}
                    />
                    <Product
                        id="123127"
                        title="The Very Hungry Caterpillar"
                        price={37.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._AC_SX184_.jpg"
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="123128"
                        title="How to Catch a Unicorn"
                        price={88.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ScPd7fg4L._AC_SX184_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
