import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { fetchLogin } from '../services/api';
import UserContext from '../context/UserContext';
import { notifSuccess, notifFail } from '../services/notifications';

const Login = () => {
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = async (data) => {
		try {
			const user = await fetchLogin(data.name, data.password);
			setUser(user);

			if (user && user.role === 0) {
				return navigate(`/admin`);
			}
			notifSuccess(`Welcome back ${data.name}`);
		} catch (e) {
			console.log(e.response.data);
			notifFail(e.response.data);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="text-black">
			<label htmlFor="name" />
			<input
				{...register('name', { required: true })}
				placeholder="name"
				type="text"
				id="name"
				className="input-register"
			/>
			{errors.name && <div className="error">enter your name</div>}
			<label htmlFor="password" />
			<input
				{...register('password', { required: true })}
				placeholder="Mot de passe"
				type="password"
				id="password"
				className="input-register"
			/>
			{errors.password && <div className="error">enter your password</div>}
			<button type="submit" className="button-general w-full">
				Login
			</button>
			<p className="text-gray-900 pt-4">Mot de passe oublié ?</p>
		</form>
	);
};

export default Login;
