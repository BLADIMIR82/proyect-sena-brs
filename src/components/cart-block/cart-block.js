import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";
import { calcTotalPrice } from "../utils";

import { CartMenu } from "../cart-menu";
import {ItemsInCart} from "../items-in-cart"
import './cart-block.css'


export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
  const items = useSelector(state => state.cart.itemsInCart)
  const navigate = useNavigate()
  const totalPrice = calcTotalPrice(items)

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate('/order');
  }, [navigate])
  return(
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <RiShoppingCartLine className="cart-block__icon" size={28} onClick={() => setIsCartMenuVisible(!isCartMenuVisible)} />

      {totalPrice > 0 ? <span className="cart-block__total-price">{totalPrice} USD</span> : null}

      {isCartMenuVisible && <CartMenu onClick={handleClick} />}
    </div>
  )
}

