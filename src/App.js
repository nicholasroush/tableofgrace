import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "./Nav/nav";
import { Footer } from "./Nav/Footer/footer";
import { Home } from "./Home/home";
import { About } from "./About/about";
import { Volunteer } from "./Volunteer/volunteer";
import { Donate } from "./Donate/donate";
import { Contact } from "./Contact/contact";
import { Help } from "./Help/help";
import { Stats } from "./Stats/stats";
import ScrollToTop from "./components/scrollToTop";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<HashRouter>
				<ScrollToTop />
				<Nav />
				<Routes>
					<Route path='/' exact element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/volunteer' element={<Volunteer />} />
					<Route path='/donate' element={<Donate />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/help' element={<Help />} />
					<Route path='/stats' element={<Stats />} />
				</Routes>
				<Footer />
			</HashRouter>
		</div>
	);
}

export default App;
