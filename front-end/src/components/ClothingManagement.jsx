import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchClothes } from '../services/api';

const ClothingManagement = () => {
	const [ clothes, setclothes ] = useState();
	const category_id = 1;
	const setData = async () => {
		setclothes(await fetchClothes());
	};

	useEffect(() => {
		setData();
	}, []);

	return (
		<div>
			<h2 className="text-center text-xl">Clothing</h2>
			<div className="flex justify-center w-full flex-wrap">
				{clothes &&
					clothes.map((clothe) => {
						return (
							<div
								className="mx-8 my-4 border-b-2 border-white"
								key={clothe.id}
							>
								<Link to={`/article/${clothe.id}/edition`}>
									<div className="filter grayscale hover:grayscale-0 relative cursor-pointer shadow-lg bg-center bg-cover transform hover:scale-110 transition duration-700 ease-out bg-zinc-500 w-32 h-32 p-32 m-8" />
								</Link>
								<h3 className="text-white text-center">{clothe.name}</h3>
							</div>
						);
					})}
				<Link to={`/article/creation/${category_id}`}>
					<button className=" bg-green-500 h-8 rounded w-24 mx-auto m-4">
						CREER
					</button>
				</Link>
			</div>
		</div>
	);
};

export default ClothingManagement;
