import React from 'react';
import { Link } from 'react-router-dom';
const CategoryCard = ({ path, name, cover }) => {
	return (
		<Link to={path}>
			<div
				className="filter grayscale hover:grayscale-0 relative cursor-pointer shadow-lg bg-center bg-cover transform hover:scale-110 transition duration-700 ease-out w-48 h-48 p-48 m-10 mb-6"
				style={{ backgroundImage: `url('${cover}')` }}
			/>
			<h2 className="text-3xl text-zinc-400 hover:text-zinc-100 text-center transition duration-700">
				{name}
			</h2>
		</Link>
	);
};

export default CategoryCard;
