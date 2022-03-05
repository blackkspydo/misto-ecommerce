import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Homepage from "./pages/Homepage";
import MenPage from "./pages/Men/MenPage";
import WomenPage from "./pages/Women/WomenPage";
import AccessoriesPage from "./pages/Accessories/AccessoriesPage";

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
			<main>
				<Routes>
					<Route path="/" exact element={<Homepage toggleCart={toggleCart} cartIsShown={cartIsShown} />} />
					<Route path="/men" exact element={<MenPage />} />
					<Route path="/women" exact element={<WomenPage />} />
					<Route path="/accessories" exact element={<AccessoriesPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
