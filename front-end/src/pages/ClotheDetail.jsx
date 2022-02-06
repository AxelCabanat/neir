import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchClotheById } from '../services/api';
import Placeholder from '../assets/placeholder.png';

const ClotheDetail = () => {
	const { id } = useParams();

	const [ clothe, setclothe ] = useState();

	const setData = async () => {
		setclothe(await fetchClotheById(id));
	};

	useEffect(() => {
		setData();
	}, []);

	return (
		<div>
			{clothe && (
				<div className="flex w-10/12 mx-auto">
					<div
						className="filter grayscale hover:grayscale-0 relative cursor-pointer shadow-lg bg-center bg-cover transform hover:scale-110 transition duration-700 ease-out bg-zinc-500 w-32 h-64 px-32 py-64 m-8 "
						style={{ backgroundImage: `url('${Placeholder}')` }}
					/>
					<div>
						<h2 className="text-xl my-10">{clothe.name}</h2>
						<p className="my-4">{clothe.support}</p>
						<p className="my-4">{clothe.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ClotheDetail;
