import { useState, useEffect } from 'react';

import GaleryCard from '../components/GaleryCard';
import { fetchGaleries } from '../services/api';
const GaleryPage = () => {
	const [ galeries, setgaleries ] = useState();

	const setData = async () => {
		setgaleries(await fetchGaleries());
	};

	useEffect(() => {
		setData();
	}, []);
	return (
		<div>
			<div className="flex justify-center w-10/12 mx-auto flex-wrap">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
					dignissim ex eu mauris laoreet, ut lobortis ligula rutrum. Vestibulum
					eu velit a ex placerat gravida. Donec dignissim sed dolor nec mollis.
					Nullam at neque et massa finibus lobortis. In in dui eros. Sed
					bibendum malesuada nibh, nec bibendum erat pulvinar eu. Nulla erat
					turpis, elementum vitae nunc a, faucibus fringilla arcu. Quisque orci
					diam, fermentum in dui et, porttitor luctus metus. Suspendisse
					potenti. Aliquam vehicula finibus arcu sed sodales. Praesent sed metus
					a augue fermentum vehicula sit amet ut nunc. Vivamus varius ligula
					magna, eu faucibus lectus porttitor ac.{' '}
				</p>
				{galeries &&
					galeries.map((galery) => {
						return (
							<GaleryCard
								key={galery.id}
								id={galery.id}
								name={galery.name}
								support={galery.support}
								description={galery.description}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default GaleryPage;
