import Women from "../../components/Layout/ProductSection/Women";
import { motion, AnimatePresence } from "framer-motion";
const WomenPage = (props) => {
	return (
        <AnimatePresence>
        <motion.div
            key="women_container"
			animate={{
                opacity:1
			}}
			initial={{ opacity:0 }}
			exit={{  opacity:0 }}
			// exit={{ opacity: 0, x: "100vw" }}
			transition={{ duration: 0.8 }}
			className="women_container"
            >
			<Women />
		</motion.div>
     </AnimatePresence>
	);
};

export default WomenPage;
