import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../assets/placeholder.png';

const GaleryCard = ({ id, name }) => {
	return (
		<Link to={`/galery/${id}`}>
			<div
				className="filter grayscale hover:grayscale-0 relative cursor-pointer shadow-lg bg-center bg-cover transform hover:scale-110 transition duration-700 ease-out bg-zinc-500 w-32 h-32 p-32 m-6"
				style={{ backgroundImage: `url('${Placeholder}')` }}
			/>
			<h3 className="text-white block text-center">{name}</h3>
		</Link>
	);
};

export default GaleryCard;
