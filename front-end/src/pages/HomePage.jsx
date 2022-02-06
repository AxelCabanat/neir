import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import CategoryCard from '../components/CategoryCard';

import ClothingCouv from '../assets/clothing.jpg';
import CustomDesignCouv from '../assets/custom-design.jpg';
import GaleryCouv from '../assets/galery.png';
import PropsCouv from '../assets/props.jpg';
import SerigraphyCouv from '../assets/serigraphy.jpg';
import Carousel1 from '../assets/carousel1.png';
import Carousel2 from '../assets/carousel2.png';
import Carousel3 from '../assets/carousel3.png';

const HomePage = () => {
	return (
		<div className="bg-black w-10/12 mx-auto ">
			<Carousel
				showThumbs={false}
				autoPlay={true}
				interval={3000}
				infiniteLoop={true}
			>
				<div>
					<img src={Carousel1} alt="pic" />
				</div>
				<div>
					<img src={Carousel2} alt="pic" />
				</div>
				<div>
					<img src={Carousel3} alt="pic" />
				</div>
			</Carousel>
			<div className="flex justify-center w-full flex-wrap">
				<CategoryCard path="/clothing" name="Clothing" cover={ClothingCouv} />
				<CategoryCard path="/props" name="Accessoires" cover={PropsCouv} />
				<CategoryCard
					path="/serigraphy"
					name="Sérigraphies"
					cover={SerigraphyCouv}
				/>
				<CategoryCard
					path="/customdesign"
					name="Design Perso"
					cover={CustomDesignCouv}
				/>
				<CategoryCard path="/galery" name="Galeries" cover={GaleryCouv} />
			</div>
		</div>
	);
};

export default HomePage;
