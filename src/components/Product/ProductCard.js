import styles from "./ProductCard.module.css";
import { Rating } from "react-simple-star-rating";
const ProductCard = (props) => {
	return (
		<div className={`${styles.productCard} ${styles[`${props.class}`]}`}>
			<div className={styles.productCard__image}>
				<img src={props.product.image} alt="" />
			</div>
			<div className={styles.productCard__text}>
				<h3>{props.product.title}</h3>
				<div className={styles.productCard__text__price}>
					<p className={styles.price}>${props.product.price}</p>
					{/* rating */}
					<div className={styles.rating}>
						({props.product.rating.count})
						<Rating
							initialValue={props.product.rating.rate}
							size={20}
							readonly={true}
							allowHalfIcon={true}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductCard;
