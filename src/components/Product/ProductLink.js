// import {Link} from 'react-router-dom';
import styles from './ProductLink.module.css';
const ProductLink = (props) => {
    return (
        <a href={`/${props.product.category}/${props.product.id}`} className={styles.productLink}>
            {props.children}
        </a>
    );
}
export default ProductLink;