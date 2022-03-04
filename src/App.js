import "./App.css";
import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Women from "./components/Layout/ProductSection/Women";
import Men from "./components/Layout/ProductSection/Men";
import Accessories from "./components/Layout/ProductSection/Accessories";
import SaleBanner from "./components/Layout/SaleBanner/SaleBanner";
import Newsletter from "./components/Layout/newsletter/Newsletter";
import Footer from "./components/Layout/Footer/Footer";
import Blog from "./components/Layout/Blog/Blog";
import Cart from "./components/Cart/Cart";
function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	// add no scroll to body
	const noScroll = () => {
		document.body.style.overflow = "hidden";
	};

	// remove no scroll to body
	const scroll = () => {
		document.body.style.overflow = "";
	};
	
	const toggleCart = () => {
		setCartIsShown((cartIsShown) => !cartIsShown);
		!cartIsShown ? noScroll() : scroll();
	};

	return (
		<div className="App">
			{cartIsShown && <Cart onCloseCart={toggleCart} />}
			<Header showCartHandler={toggleCart} />
			<Hero />
			<div className="product-section">
				<Women />
				<Men />
				<Accessories />
			</div>
			<SaleBanner />
			<Newsletter />
			<div className="product-section">
				<Blog />
			</div>

			<Footer />
		</div>
	);
}

export default App;
