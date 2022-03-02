import SVGLoader from "../../assets/SVGLoader";
import styles from "./Loader.module.css";
const Loader = (props) => {
	return (
		<div className={styles.loader}>
			<div className={styles.loader__spinner}>
				<SVGLoader {...props} width={"100%"} height={"100%"} />
			</div>
                <div className={styles.loading__text}>loading...</div>
		</div>
	);
};

export default Loader;