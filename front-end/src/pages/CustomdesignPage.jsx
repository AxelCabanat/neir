import { useState, useEffect } from 'react';
import CustomdesignCard from '../components/CustomdesignCard';
import { fetchCustomdesign } from '../services/api';

const CustomdesignPage = () => {
	const [ designs, setdesigns ] = useState();

	const setData = async () => {
		setdesigns(await fetchCustomdesign());
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
				{designs &&
					designs.map((design) => {
						return (
							<CustomdesignCard
								key={design.id}
								id={design.id}
								name={design.name}
								support={design.support}
								description={design.description}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default CustomdesignPage;
