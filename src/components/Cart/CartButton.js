import { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
// import Input from "../UI/Input";
import styles from "./CartButton.module.css";

const CartButton = ({ quantity, onClick }) => {
	const [added, setadded] = useState(false);
	const addToCartHandler = () => {
		setadded(!added);
		onClick();
	};
	return (
		<div className={styles.cartContainer}>
			{/* <input type="number" min={0} max={100} /> */}
			<button onClick={addToCartHandler} className={styles.cartButton}>
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
