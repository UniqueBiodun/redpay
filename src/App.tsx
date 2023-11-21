import { Route, Routes } from "react-router-dom";
import Navbar from "./views/containers/navbar/navbar";
import Home from "./views/pages/home";
import Footer from "./views/containers/footer/footer";
import Company from "./views/pages/company";
import Features from "./views/pages/features";
import ScrollToTop from "./helper/ScrollToTop";
import Faqs from "./views/pages/faqs";
import ContactSupport from "./views/pages/contact-support";

function App() {
	return (
		<>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/company"
					element={<Company />}
				/>
				<Route
					path="/features"
					element={<Features />}
				/>
				<Route
					path="/faqs"
					element={<Faqs />}
				/>
				<Route
					path="/support"
					element={<ContactSupport />}
				/>
				<Route
					path="/contact-us"
					element={<ContactSupport />}
				/>
				<Route
					path="*"
					element={""}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
