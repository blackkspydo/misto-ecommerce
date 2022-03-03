import "./App.css";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Women from "./components/Layout/ProductSection/Women";
import Men from "./components/Layout/ProductSection/Men";
import Accessories from "./components/Layout/ProductSection/Accessories";
import SaleBanner from "./components/Layout/SaleBanner/SaleBanner";
function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<div className="product-section">
			<Women />
			<Men />
			<Accessories />
			</div>
			<SaleBanner />
		</div>
	);
}

export default App;
