import styles from "./Nav.module.css";

const Nav = () => {
	const navItem = [
		{ name: "Home", link: "/" },
		{ name: "Male", link: "/male" },
		{ name: "Female", link: "/female" },
		{ name: "Blog", link: "/blog" },
		{ name: "Contact", link: "/contact" },
	];

	const nav = navItem.map((item) => {
		return (
			<li key={item.name} className={styles.nav__list__item}>
				<a href={item.link} className={styles.nav__list__item__link}>
					{item.name}
				</a>
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
