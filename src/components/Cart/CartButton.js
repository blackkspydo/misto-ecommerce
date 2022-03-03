import { MdOutlineAddShoppingCart } from "react-icons/md";
// import Input from "../UI/Input";
import styles from "./CartButton.module.css";
const CartButton = ({ quantity, onClick }) => {
	return (
		<div className={styles.cartContainer}>
            {/* <input type="number" min={0} max={100} /> */}
            <button
                className={styles.cartButton}
            >
                <span className={styles.cartButton__icon}>
                    <MdOutlineAddShoppingCart />
                </span>
            </button>
        </div>
	);
};

export default CartButton;
