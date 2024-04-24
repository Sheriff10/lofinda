import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home /> } />
				<Route path="/about" element={<About /> } />
			</Routes>
		</div>
	);
}

export default App;
