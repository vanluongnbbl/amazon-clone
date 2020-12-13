import { Star } from '@material-ui/icons'
import React from 'react'
import { useStateValue } from '../../Store/StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        // remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
                alt="checkout product image"
            />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}><Star style={{ color: '#f0c14b' }} /></p>
                    ))}
                </div>

                {!hideButton && (
                    <button
                        onClick={removeFromBasket}
                    >Remove from basket</button>
                )}

            </div>
        </div>
    )
}

export default CheckoutProduct
