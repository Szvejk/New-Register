import * as yup from 'yup';

export const schema = yup.object().shape({
	email: yup.string().email('Please enter a valid email').required('Required'),
	password: yup.string().required('Password is required'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match'),
});
