import { useEffect, useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import CartPortal from "../UI/CartPortal";
import styles from "./Cart.module.css";
import {IoMdCloseCircle} from 'react-icons/io';
const Cart = ({ onCloseCart }) => {
	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	const ctx = useContext(CartContext);
	useEffect(() => {
		const cartItems = ctx.items;
		if (cartItems) {
			setCart(cartItems);
			setTotal(cartItems.reduce((acc, item) => acc + item.price, 0));
		}
	}, [ctx.items]);

	const cartItems = cart.map((item) => {
		return (
			<div className={styles.cartItem} key={item.id}>
				<div className={styles.cartItem__img}>
					{" "}
					<img src={item.image} alt="" />{" "}
				</div>
				<div className={styles.cartItem__text}>
					<p>{item.title}</p>
					<div className={styles.cartItem__text__price}>
						<p className={styles.price}>${item.price}</p>
                        <p className={styles.cancel} onClick={()=>ctx.removeItem(item.id)}>Cancel{item.quantity}</p>
					</div>
				</div>
			</div>
		);
	});
	const onCloseHandler = () => {
		onCloseCart();
	};
	return (
		<CartPortal className={styles.cart} toggleCart={onCloseCart}>
			<div className={styles.closeButton} onClick={onCloseHandler}>
				<IoMdCloseCircle />
			</div>
			<h2>Your Cart</h2>
			<div className={styles.cart__items}>{cartItems}</div>
			<div className={styles.cart__total}>
				<p>Total: ${total.toFixed(2)}</p>
			</div>
		</CartPortal>
	);
};
export default Cart;
