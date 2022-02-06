import FacebookIcon from '../assets/icone-face.png';
import InstaIcon from '../assets/icone-insta.png';

const Footer = () => {
	return (
		<div className="flex justify-center items-center bg-black text-white w-10/12 mx-auto border-t border-white mb-6 mt-6">
			<ul className="flex my-10">
				<li className="mx-10 navbarLink">
					<a href="https://www.facebook.com/neirdesign/">
						<img src={FacebookIcon} alt="Facebook" />
					</a>
				</li>
				<li className="mx-10 navbarLink">
					<a href="https://www.instagram.com/neirdesign/?hl=fr">
						<img src={InstaIcon} alt="Instagram" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Footer;
