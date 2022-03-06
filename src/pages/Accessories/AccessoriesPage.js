import Accessories from "../../components/Layout/ProductSection/Accessories";
import { motion } from "framer-motion";
const AccessoriesPage = (props) => {
	return (
		<motion.div
			key="accessories"
			animate={{
				opacity: 1,
			}}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			// exit={{ opacity: 0, x: "100vw" }}
			transition={{ duration: 0.8 }}
			className="accessories"
		>
			<Accessories />
		</motion.div>
	);
};

export default AccessoriesPage;
