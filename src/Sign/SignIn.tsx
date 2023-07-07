import * as yup from 'yup';
import React, { useRef, useEffect } from 'react';
import styles from './SignIn.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema/schema';
import { UserList } from '../App';
import { Link } from 'react-router-dom';
import UsersLogged from '../sectionUsersLogged/UsersLogged';
import { useNavigate } from 'react-router-dom';

type FormValues = {
	email: string;
	password: string;
	passwordConfirmation: string;
};

interface Props {
	userList: UserList[];
}

const SignIn = ({ userList }: Props) => {
	const {
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>({
		mode: 'all',
		resolver: yupResolver(schema),
	});

	console.log(errors);
	const navigate = useNavigate();

	const onSubmit = (data: FormValues) => {
		console.log(data);
		const findUser = userList.find((el) => el.email === data.email);

		if (findUser) {
			if (findUser.password === data.password) {
				localStorage.setItem('isLoggin', 'true');
				navigate('/logged');
			} else {
				localStorage.setItem('isLoggin', 'false');
				navigate('/');
			}
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.boxRegister}>
				<form onSubmit={handleSubmit(onSubmit)}>
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
					<span>Password</span>
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

					<button type='submit'>Zaloguj sie</button>

					<Link to='/register' className={styles.registerButton}>
						<button type='submit'>Zarejestruj sie</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

export default SignIn;

// navigate react router
