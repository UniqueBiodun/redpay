import { Route, Routes } from "react-router-dom";
import Navbar from "./views/containers/navbar/navbar";
import Home from "./views/pages/home";
import Footer from "./views/containers/footer/footer";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={""} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
