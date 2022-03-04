import styles from "./CartCounter.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
const CartCounter= (props)=>{
    const ctx = useContext(CartContext);
    return <span className={styles.cartCounter}>{ctx.items.length}</span>
}

export default CartCounter;