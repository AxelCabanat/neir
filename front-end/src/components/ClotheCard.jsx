import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../assets/placeholder.png';

const ClotheCard = ({ id, name }) => {
	return (
		<Link to={`/clothing/${id}`}>
			<div
				className="filter grayscale hover:grayscale-0 relative cursor-pointer shadow-lg bg-center bg-cover transform hover:scale-110 transition duration-700 ease-out bg-zinc-500 w-32 h-64 px-32 py-64 m-8 "
				style={{ backgroundImage: `url('${Placeholder}')` }}
			/>
			<h3 className="text-white text-center">{name}</h3>
		</Link>
	);
};

export default ClotheCard;
