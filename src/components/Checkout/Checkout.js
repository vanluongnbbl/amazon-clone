import React from 'react'
import { useStateValue } from '../Store/StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct/CheckoutProduct'
import Subtotal from './Subtotal/Subtotal'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primeday/PD18/AAFeedback/Bruno/1500x300_Starts_Banner_v2._CB474351192_.gif"
                    alt="" />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map((item, i) => (
                        <CheckoutProduct key={i}
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                    {/* Basket Item */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
