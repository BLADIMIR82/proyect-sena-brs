import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import './cart-item.css'

export const CartItem = ({title, price, id}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(id))
  }
  return(
    <div className="cart-item">
      <h3 className="cart-item__title">{title}</h3>
      <div className="cart-item__price">
        <span>{price} USD</span>
        <AiOutlineCloseCircle size={25} className="cart-item__delete-icon" onClick={handleClick} />
      </div>
    </div>
  )
}