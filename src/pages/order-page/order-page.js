import { useSelector } from 'react-redux'
import {calcTotalPrice } from '../../components/utils'

import { OrderItem } from '../../components/order-item/order-item';

import './order-page.css'

export const OrderPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const items = useSelector(state => state.cart.itemsInCart);

 
  if (items.length > 0) {
  
  return(
    <div className="order-page">
      <div className="order-page__left">
        { items.map(game => <OrderItem game={game} />)}
      </div>

      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} goods worth { calcTotalPrice(items) } USD
          </span>
        </div>
      </div>
    </div>
  )
}
return(
  <div className='cart-empty'>
    <h1>
      Cart Empty!!!
    </h1>
  </div>
)

}