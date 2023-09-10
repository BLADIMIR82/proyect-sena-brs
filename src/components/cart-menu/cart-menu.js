import React from 'react'
import { useSelector } from 'react-redux'
import { calcTotalPrice } from '../utils'

import {Button} from '../button'
import { CartItem } from '../cart-item'
import './cart-menu.css'

export const CartMenu = ({onClick}) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  return(
    <div className="cart-menu">
      <div className="cart-menu__game-list">
        {
          items.length > 0 ? items.map(game => <CartItem key={game.title} price={game.price} title={game.title} id={game.id} />) : 'Cart is empty'
        }
      </div>
      {
        items.length > 0 ?
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Total sum: </span>
            <span>{calcTotalPrice(items)}USD</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Proceed to checkout
          </Button>
        </div>
        : null
      }
    </div>
  )
}