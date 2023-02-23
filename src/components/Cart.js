import { useSelector } from "react-redux";
import store from "../utils/store";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return <div>{cartItems.map((item) => <MenuItem key={item.id} {...item}/>)}</div>;
};

export default Cart;
