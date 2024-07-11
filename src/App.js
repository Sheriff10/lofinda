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
import OrderHistory from "./pages/User/OrderHistory/OrderHistory";
import Profile from "./pages/User/Profle/Profile";
import WishList from "./pages/User/WishList/WishList";
import ShoppingCartProvider from "./context/ShoppingCartContext";

function App() {
	// window.api = "http://localhost:5000";
	window.api = "https://lofinda-server.onrender.com";
	return (
		<div className="App">
			<ScrollToTop />
			<ShoppingCartProvider>
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

					{/* USER */}
					<Route path="/user/order/history" element={<OrderHistory />} />
					<Route path="/user/profile" element={<Profile />} />
					<Route path="/user/wishlist" element={<WishList />} />
				</Routes>
			</ShoppingCartProvider>
		</div>
	);
}

export default App;
