import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Perfume from "./pages/Perfumes/perfume";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home /> } />
				<Route path="/about" element={<About /> } />
				<Route path="/perfumes" element={<Perfume /> } />
			</Routes>
		</div>
	);
}

export default App;
