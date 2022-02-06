import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { fetchCreateArticle } from '../services/api';
import { notifSuccess, notifFail } from '../services/notifications';

const ArticleCreator = () => {
	const category_id = useParams();

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	async function onSubmit(data) {
		try {
			const formData = new FormData();
			formData.append('name', data.name);
			formData.append('support', data.support);
			formData.append('order', data.order);
			formData.append('description', data.descripton);

			await fetchCreateArticle(category_id, formData);
			notifSuccess(`Article créé`);
		} catch (e) {
			notifFail(`Création échouée`);
			console.log(e);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="m-4">
					<label htmlFor="name">Name</label>
					<input {...register('name')} id="name" className="text-zinc-500" />
				</div>
				<div className="m-4">
					<label htmlFor="support">Supports</label>
					<input
						{...register('support')}
						id="support"
						className="text-zinc-500"
						type="text"
					/>
				</div>
				<div className="m-4">
					<label htmlFor="order">Order</label>
					<textarea
						{...register('order')}
						id="order"
						className="text-zinc-500"
					/>
				</div>
				<div className="m-4">
					<label htmlFor="description">Description</label>
					<textarea
						{...register('description')}
						id="description"
						className="text-zinc-500"
					/>
				</div>

				<button
					type="submit"
					className=" bg-yellow-500 h-8 rounded w-24 mx-auto"
				>
					CREER
				</button>
			</form>
		</div>
	);
};

export default ArticleCreator;
