import {BiSearchAlt} from 'react-icons/bi';
import {BsGlobe} from 'react-icons/bs';
import {MdPersonOutline} from 'react-icons/md';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import styles from './DashNav.module.css';
import CartCounter from '../../Cart/CartCounter';
const DashNav = () => {
	return (
		<div className={styles.dashNav}>
			<div className={styles.dashNav__item}>
                <BiSearchAlt />
            </div>
			<div className={styles.dashNav__item}>
                <BsGlobe />
            </div>
			<div className={styles.dashNav__item}>
                <MdPersonOutline />
            </div>
			<div className={styles.dashNav__item}>
                <AiOutlineShoppingCart /> <CartCounter />
            </div>
		</div>
	);
};
export default DashNav;
