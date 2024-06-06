import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Perfume from "./pages/Perfumes/perfume";
import PerfumeDetails from "./pages/Perfumes/PerfumeDetails";
import Cart from "./pages/Perfumes/Cart/Cart";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ScrollToTop from "./ui/Scroll";
import Contact from "./pages/Contact/Contact";

function App() {
	return (
		<div className="App">
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/perfumes" element={<Perfume />} />
				<Route path="/perfumes/detail" element={<PerfumeDetails />} />
				<Route path="/perfumes/cart" element={<Cart />} />

				{/* AUTH */}
				<Route path="/auth/login" element={<Login />} />
				<Route path="/auth/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
