import "./App.css";
import Header from "./components/Layout/Header/Header";
import Hero from "./components/Layout/Hero/Hero";
import Women from "./components/Layout/ProductSection/Women";
import Men from "./components/Layout/ProductSection/Men";
import Accessories from "./components/Layout/ProductSection/Accessories";
import SaleBanner from "./components/Layout/SaleBanner/SaleBanner";
import Newsletter from "./components/Layout/newsletter/Newsletter";
import Footer from "./components/Layout/Footer/Footer";
import Blog from "./components/Layout/Blog/Blog";
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
			<Newsletter />
			<div className="product-section">
			<Blog />
			</div>
			
			<Footer />

		</div>
	);
}

export default App;
