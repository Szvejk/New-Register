import * as yup from 'yup';
import React, { useRef } from 'react';
import styles from './SignIn.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './schema/schema';
type FormValues = {
	email: string;
	password: string;
	passwordConfirmation: string;
};

const SignIn = () => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		mode: 'all',
		resolver: yupResolver(schema),
	});

	console.log(errors);

	return (
		<div className={styles.wrapper}>
			<form
				onSubmit={handleSubmit((data) => {
					console.log(data);
				})}
			>
				<Controller
					name='email'
					defaultValue=''
					control={control}
					render={({ field: { onChange, value } }) => (
						<input value={value} onChange={onChange} type='text' />
					)}
				/>
				{errors.email?.message && <span>{errors.email.message} </span>}
				<Controller
					name='password'
					defaultValue=''
					control={control}
					render={({ field: { onChange, value } }) => (
						<input value={value} onChange={onChange} type='password' />
					)}
				/>
        		{errors.password?.message && <span>{errors.password.message} </span>}
				<Controller
					name='passwordConfirmation'
					defaultValue=''
					control={control}
					render={({ field: { onChange, value } }) => (
						<input value={value} onChange={onChange} type='password' />
					)}
				/>
        		{errors.passwordConfirmation?.message && <span>{errors.passwordConfirmation.message} </span>}
				<button type='submit'>Zarejestruj sie</button>
			</form>
		</div>
	);
};

export default SignIn;
