import styles from './Register.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import React, { useRef, useEffect } from 'react';
import { schemaRegister } from './schemaRegister';
import { UserList } from '../App';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
type RegisterValues = {
	email: string;
	name: string;
	surname: string;
	password: string;
	passwordConfirmation: string;
	city: string;
	country: string;
	state: string;
};
interface Props {
	userList: UserList[];
}

const Register = ({ userList }: Props) => {
	const notify = () =>
		toast.error('Takie konto już istnieje', {
			position: toast.POSITION.TOP_CENTER,
			theme: 'dark',
			autoClose: false,
		});
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<RegisterValues>({
		mode: 'all',
		resolver: yupResolver(schemaRegister),
	});
	console.log(errors);

	const onSubmit = (data: RegisterValues) => {
		if (userList.includes(data)) {
			notify();
		} else {
			console.log(data);
			userList.push(data);
		}
	};

	return (
		<div>
			<ToastContainer limit={1} />{' '}
			<div className={styles.wrapper}>
				<div className={styles.registerForm}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<span> Name</span>
						<Controller
							name='name'
							defaultValue=''
							control={control}
							render={({ field: { onChange, value } }) => (
								<input value={value} onChange={onChange} type='text' />
							)}
						/>
						{errors.name?.message && (
							<span className={styles.err}>{errors.name.message} </span>
						)}
						<span> Surame</span>
						<Controller
							name='surname'
							defaultValue=''
							control={control}
							render={({ field: { onChange, value } }) => (
								<input value={value} onChange={onChange} type='text' />
							)}
						/>
						{errors.surname?.message && (
							<span className={styles.err}>{errors.surname.message} </span>
						)}
						<span> Email</span>
						<Controller
							name='email'
							defaultValue=''
							control={control}
							render={({ field: { onChange, value } }) => (
								<input value={value} onChange={onChange} type='text' />
							)}
						/>
						{errors.email?.message && (
							<span className={styles.err}>{errors.email.message} </span>
						)}

						<span> Create Password</span>
						<Controller
							name='password'
							defaultValue=''
							control={control}
							render={({ field: { onChange, value } }) => (
								<input value={value} onChange={onChange} type='password' />
							)}
						/>
						{errors.password?.message && (
							<span className={styles.err}>{errors.password.message} </span>
						)}

						<span>Repeat password</span>
						<Controller
							name='passwordConfirmation'
							defaultValue=''
							control={control}
							render={({ field: { onChange, value } }) => (
								<input value={value} onChange={onChange} type='password' />
							)}
						/>
						{errors.passwordConfirmation?.message && (
							<span className={styles.err}>
								{errors.passwordConfirmation.message}{' '}
							</span>
						)}
						<span> City</span>
						<Controller
							name='city'
							defaultValue=''
							control={control}
							render={({ field: { onChange, value } }) => (
								<input value={value} onChange={onChange} type='text' />
							)}
						/>
						{errors.city?.message && (
							<span className={styles.err}>{errors.city.message} </span>
						)}
						<span> State</span>
						<Controller
							name='state'
							defaultValue=''
							control={control}
							render={({ field: { onChange, value } }) => (
								<input value={value} onChange={onChange} type='text' />
							)}
						/>
						{errors.state?.message && (
							<span className={styles.err}>{errors.state.message} </span>
						)}
						<span> Country</span>
						<Controller
							name='country'
							defaultValue=''
							control={control}
							render={({ field: { onChange, value } }) => (
								<input value={value} onChange={onChange} type='password' />
							)}
						/>
						{errors.country?.message && (
							<span className={styles.err}>{errors.country.message} </span>
						)}

						<button type='submit'>Zarejestruj </button>

						<Link to='/' className={styles.registerButton}>
							{' '}
							<button type='submit'>Zaloguj sie</button>{' '}
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
