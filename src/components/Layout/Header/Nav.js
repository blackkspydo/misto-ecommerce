import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
	const navItem = [
		{ name: "Home", link: "/" },
		{ name: "Men", link: "/men" },
		{ name: "Women", link: "/women" },
		{ name: "Accessories", link: "/accessories" },
		{ name: "Blog", link: "/blog" },
		{ name: "Contact", link: "/contact" },
	];

	const nav = navItem.map((item) => {
		return (
			<li key={item.name} className={styles.nav__list__item}>
				<NavLink to={item.link} className={styles.nav__list__item__link}>
					{item.name}
				</NavLink>
			</li>
		);
	});
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>{nav}</ul>
		</nav>
	);
};

export default Nav;
