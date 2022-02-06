import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClothingPage from './pages/ClothingPage';
import ClotheDetail from './pages/ClotheDetail';
import PropsPage from './pages/PropsPage';
import PropDetail from './pages/PropsDetail';
import SerigraphyPage from './pages/SerigraphyPage';
import SerigraphyDetail from './pages/SerigraphyDetail';
import CustomdesignPage from './pages/CustomdesignPage';
import CustomdesignDetail from './pages/CustomdesignDetail';
import GaleryPage from './pages/GaleryPage';
import AboutPage from './pages/AboutPage';
import Login from './pages/Login';
import UserContextProvider from './context/UserContextProvider';
import AdminPage from './pages/AdminPage';
import ArticleEditor from './pages/ArticleEditor';
import ArticleCreator from './pages/ArticleCreator';

function App() {
	return (
		<UserContextProvider>
			<BrowserRouter>
				<ToastContainer />
				<div>
					<Navbar />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/clothing" element={<ClothingPage />} />
						<Route path="/clothing/:id" element={<ClotheDetail />} />
						<Route path="/props" element={<PropsPage />} />
						<Route path="/props/:id" element={<PropDetail />} />
						<Route path="/serigraphy" element={<SerigraphyPage />} />
						<Route path="/serigraphy/:id" element={<SerigraphyDetail />} />
						<Route path="/customdesign" element={<CustomdesignPage />} />
						<Route path="/customdesign/:id" element={<CustomdesignDetail />} />
						<Route path="/galery" element={<GaleryPage />} />
						<Route path="/about" element={<AboutPage />} />
						<Route path="/login" element={<Login />} />
						<Route path="/admin" element={<AdminPage />} />
						<Route path="/article/:id/edition" element={<ArticleEditor />} />
						<Route
							path="/article/creation/:category_id"
							element={<ArticleCreator />}
						/>
					</Routes>
					<Footer />
				</div>
			</BrowserRouter>
		</UserContextProvider>
	);
}

export default App;
