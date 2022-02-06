import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCustomdesignById } from '../services/api';
import Placeholder from '../assets/placeholder.png';

const CustomdesignDetail = () => {
	const { id } = useParams();

	const [ design, setDesign ] = useState();

	const setData = async () => {
		setDesign(await fetchCustomdesignById(id));
	};

	useEffect(() => {
		setData();
	}, []);
	return (
		<div>
			{design && (
				<div className="flex w-10/12 mx-auto">
					<div
						className="filter grayscale hover:grayscale-0 relative cursor-pointer shadow-lg bg-center bg-cover transform hover:scale-110 transition duration-700 ease-out bg-zinc-500 w-32 h-32 p-32 m-8"
						style={{ backgroundImage: `url('${Placeholder}')` }}
					/>
					<div>
						<h2>{design.name}</h2>
						<p>{design.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomdesignDetail;
