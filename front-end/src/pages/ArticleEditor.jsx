import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
	fetchArticleById,
	deleteArticle,
	fetchUpdateArticle
} from '../services/api';
import { notifSuccess, notifFail } from '../services/notifications';

const ArticleEditor = () => {
	const { id } = useParams();

	const [ article, setArticle ] = useState();

	const { register, handleSubmit, watch, formState: { errors } } = useForm();

	const setData = async () => {
		setArticle(await fetchArticleById(id));
	};

	const isDelete = () => {
		deleteArticle(id);
		notifSuccess('Suppression effectuée');
		setTimeout(() => {
			Navigate(`/admin`);
		}, 1500);
	};

	async function onSubmit(data) {
		try {
			const formData = new FormData();
			formData.append('name', data.name);
			formData.append('support', data.support);
			formData.append('order', data.order);
			formData.append('description', data.descripton);

			await fetchUpdateArticle(id, formData);
			notifSuccess(`Modification sauvegardée`);
		} catch (e) {
			notifFail(`Modification échouée`);
			console.log(e);
		}
	}

	useEffect(() => {
		setData();
	}, []);

	return (
		<div>
			{article && (
				<div className="flex w-10/12 mx-auto">
					<div className="bg-zinc-500 w-32 h-64 px-32 py-64 m-4 justify-end items-end" />
					<div>
						{article.name && <h2 className="text-xl my-10">{article.name}</h2>}
						{article.support && <p className="my-4">{article.support}</p>}
						{article.description && (
							<p className="my-4">{article.description}</p>
						)}
						{article.order && <p className="my-4">{article.order}</p>}
					</div>
					<div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="m-4">
								<label htmlFor="name">Name</label>
								<input
									{...register('name')}
									id="name"
									className="text-zinc-500"
								/>
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
								MODIFIER
							</button>
						</form>
						<button
							className=" bg-red-500 h-8 rounded w-24 mx-auto m-4"
							onClick={isDelete}
						>
							SUPPRIMER
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ArticleEditor;
