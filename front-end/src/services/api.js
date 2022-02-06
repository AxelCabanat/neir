import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

/**
 * Returns the whole clothes list
 */
export const fetchClothes = async () => {
	return (await axios(`${API_URL}/clothes`)).data;
};

/**
 * Return one clothe by id
 */
export const fetchClotheById = async (id) => {
	return (await axios(`${API_URL}/clothes/${id}`)).data;
};

/**
 * Returns the whole props list
 */
export const fetchProps = async () => {
	return (await axios(`${API_URL}/props`)).data;
};

/**
 * Return one prop by id
 */
export const fetchPropById = async (id) => {
	return (await axios(`${API_URL}/props/${id}`)).data;
};

/**
 * Returns the whole serigraphies list
 */
export const fetchSerigraphies = async () => {
	return (await axios(`${API_URL}/serigraphies`)).data;
};

/**
 * Return one serigraphy by id
 */
export const fetchSerigraphiesById = async (id) => {
	return (await axios(`${API_URL}/serigraphies/${id}`)).data;
};

/**
 * Returns the whole custom designs list
 */
export const fetchCustomdesign = async () => {
	return (await axios(`${API_URL}/customdesign`)).data;
};

/**
 * Return one custom design by id
 */
export const fetchCustomdesignById = async (id) => {
	return (await axios(`${API_URL}/customdesign/${id}`)).data;
};

/**
 * Returns the whole galeries list
 */
export const fetchGaleries = async () => {
	return (await axios(`${API_URL}/galeries`)).data;
};

/**
 * Return one galery by id
 */
export const fetchGaleryById = async (id) => {
	return (await axios(`${API_URL}/galeries/${id}`)).data;
};

/**
 * login
 */
export const fetchLogin = async (name, password) => {
	return (await axios.post(`${API_URL}/users/login`, { name, password })).data;
};

/**
 * Return one article by id
 */
export const fetchArticleById = async (id) => {
	return (await axios(`${API_URL}/articles/${id}`)).data;
};

/**
 * create new article
 */
export const fetchCreateArticle = async (category_id, formData) => {
	return await axios.post(`${API_URL}/articles/${category_id}`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
};

/**
 * update article
 */
export const fetchUpdateArticle = async (id, formData) => {
	return await axios.put(`${API_URL}/articles/${id}`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
};

/**
 * Delete article
 */
export const deleteArticle = async (id) => {
	return await axios.delete(`${API_URL}/articles/${id}`);
};
