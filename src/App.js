import './App.css';
import Header from './components/Layout/Header/Header';
import Hero from './components/Layout/Hero/Hero';
import Women from './components/Layout/ProductSection/Women';
import Men from './components/Layout/ProductSection/Men';
import Accessories from './components/Layout/ProductSection/Accessories';
function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Women />
     <Men />
     <Accessories />
    </div>
  );
}

export default App;
