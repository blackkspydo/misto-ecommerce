import Men from "../../components/Layout/ProductSection/Men";
import styles from "./MenPage.module.css";
import { motion } from "framer-motion";
const MenPage = (props) => {
	return (
		<motion.div
        key="men_container"
        animate={{
            opacity:1
        }}
        initial={{ opacity:0 }}
        exit={{  opacity:0 }}
        // exit={{ opacity: 0, x: "100vw" }}
        transition={{ duration: 0.8 }}
			className={`${styles.Men_container} men_container`}
		>
			<Men />
		</motion.div>
	);
};

export default MenPage;
