import styles from "./Contact.module.css";
import { BsCheckAll } from "react-icons/bs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import contactus from "../../assets/contactus.jpg";
const Contact = () => {
	const [toggleButton, settoggleButton] = useState(false);
	const clearForm = () => {
		document.getElementById("name").value = "";
		document.getElementById("email").value = "";
		document.getElementById("message").value = "";
	};
	const submitHandler = (e) => {
		e.preventDefault();
		console.log("submit");
		settoggleButton((toggleButton) => !toggleButton);
		clearForm();
	};
	return (
		<motion.div
			key="contact"
			animate={{
				opacity: 1,
			}}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			// exit={{ opacity: 0, x: "100vw" }}
			transition={{ duration: 0.8 }}
			className={styles.contact}
		>
			<div className={styles.headerContainer}>
					<div className={styles.nav}>
						<Link to="/">Home</Link>
						{" > "}
						<Link to="/contact">Contact</Link>
					</div>
					<div className={styles.header__title}>
						<h1>Contact Us</h1>
					</div>
				</div>
			<div className={styles.contact__container}>
				
				<div className={styles.text}>
					<h1>We'd love to hear from you</h1>
					<p>
						If you have any questions, please don't hesitate to contact us. We
						are here to help you.
					</p>
				</div>
				<form className={styles.form} onSubmit={submitHandler}>
					<input id="name" type="text" placeholder="Name" />
					<input id="email" type="email" placeholder="Email" />
					<textarea id="message" placeholder="Message"></textarea>
					<motion.button>
						{!toggleButton ? (
							<AnimatePresence>
								<motion.span
									// initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 8 }}
									exit={{ opacity: 0, transition: { duration: 0.5 } }}
								>
									Send
								</motion.span>
							</AnimatePresence>
						) : (
							<AnimatePresence>
								<motion.span
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 8 }}
									exit={{
										opacity: 0,
										x: "100vw",
										transition: { duration: 0.5 },
									}}
								>
									<span>Sent</span>
									<BsCheckAll />
								</motion.span>
							</AnimatePresence>
						)}
					</motion.button>
				</form>
			</div>
		</motion.div>
	);
};

export default Contact;
