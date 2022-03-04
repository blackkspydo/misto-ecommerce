import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
// import Input from "../UI/Input";
import styles from "./CartButton.module.css";

const CartButton = (props) => {
	const [added, setadded] = useState(false);
	const ctx = useContext(CartContext);
	const addToCartHandler = (id) => {
		setadded(!added);
		if (!added){
			ctx.addItem(id);
		}else{
			ctx.removeItem(id);
		}

	};
	return (
		<div className={styles.cartContainer}>
			{/* <input type="number" min={0} max={100} /> */}
			<button onClick={()=>addToCartHandler(props.productId)} className={styles.cartButton}>
				{!added ? (
					<motion.span className={styles.cartButton__icon}>
						<MdOutlineAddShoppingCart />
					</motion.span>
				) : (
					<motion.span className={styles.cartButton__icon}>
						<BsCartCheckFill />
					</motion.span>
				)}
			</button>
		</div>
	);
};

export default CartButton;
