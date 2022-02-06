import { Link } from 'react-router-dom';
import Title from '../assets/Neir-title.png';

const Navbar = () => {
	return (
		<div className="bg-black text-white w-10/12 mx-auto border-b border-white mb-6">
			<Link to="/">
				<img className="m-auto w-100  " src={Title} alt="Neir" />
			</Link>
			<ul className="flex center justify-around mb-2">
				<Link to="/clothing">
					<li className="navbarLink">Clothing</li>
				</Link>
				<Link to="/props">
					<li className=" navbarLink">Accessoires</li>
				</Link>
				<Link to="/serigraphy">
					<li className=" navbarLink">Sérigraphie</li>
				</Link>
				<Link to="/customdesign">
					<li className=" navbarLink">Design Perso</li>
				</Link>
				<Link to="/galery">
					<li className=" navbarLink">Galerie</li>
				</Link>
				<Link to="about">
					<li className=" navbarLink">A propos</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
