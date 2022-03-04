import { useEffect, useState, useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import { Rating } from "react-simple-star-rating";
const Cart = (props) => {
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
                <img src={item.image} alt="" />
                <div className={styles.cartItem__text}>
                    <h3>{item.title}</h3>
                    <div className={styles.cartItem__text__price}>
                        <p className={styles.price}>${item.price}</p>
                        <div className={styles.rating}>
                            ({item.rating.count})
                            <Rating
                                initialValue={item.rating.rate}
                                size={20}
                                readonly={true}
                                allowHalfIcon={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className={styles.cart}>
            <h2>Your Cart</h2>
            <div className={styles.cart__items}>{cartItems}</div>
            <div className={styles.cart__total}>
                <p>Total: ${total}</p>
            </div>
        </div>
    )
}
export default Cart;
