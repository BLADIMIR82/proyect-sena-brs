import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";
import Swal from "sweetalert2/dist/sweetalert2.js";

import { Button } from "../button";
import "./game-buy.css";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const hundleClick = (event) => {
    event.stopPropagation();

    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Added To Cart",
        showConfirmButton: false,
        timer: 1100,
        width: 500,
        weight: 130,
      });
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">{game.price} USD</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={hundleClick}
      >
        {isItemInCart ? "Delete from Basket" : "Add to Basket"}
      </Button>
    </div>
  );
};
