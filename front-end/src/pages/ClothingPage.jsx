import { useEffect, useState } from 'react';
import ClotheCard from '../components/ClotheCard';
import { fetchClothes } from '../services/api';

const ClothingPage = () => {
	const [ clothes, setclothes ] = useState();

	const setData = async () => {
		setclothes(await fetchClothes());
	};

	useEffect(() => {
		setData();
	}, []);

	return (
		<div className="w-10/12 mx-auto">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
				dignissim ex eu mauris laoreet, ut lobortis ligula rutrum. Vestibulum eu
				velit a ex placerat gravida. Donec dignissim sed dolor nec mollis.
				Nullam at neque et massa finibus lobortis. In in dui eros. Sed bibendum
				malesuada nibh, nec bibendum erat pulvinar eu. Nulla erat turpis,
				elementum vitae nunc a, faucibus fringilla arcu. Quisque orci diam,
				fermentum in dui et, porttitor luctus metus. Suspendisse potenti.
				Aliquam vehicula finibus arcu sed sodales. Praesent sed metus a augue
				fermentum vehicula sit amet ut nunc. Vivamus varius ligula magna, eu
				faucibus lectus porttitor ac.{' '}
			</p>
			<div className="flex justify-center w-full flex-wrap">
				{clothes &&
					clothes.map((clothe) => {
						return (
							<ClotheCard
								key={clothe.id}
								id={clothe.id}
								name={clothe.name}
								support={clothe.support}
								description={clothe.description}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default ClothingPage;
