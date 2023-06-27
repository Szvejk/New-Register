import * as yup from 'yup';

export const schemaRegister = yup.object().shape({
	name: yup
		.string()
		.min(3, 'Please enter minimum 3 letters')
		.required('Required'),
	surname: yup
		.string()
		.min(2, 'Please enter minimum 2 letters')
		.required('Required'),
	email: yup.string().email('Please enter a valid email').required('Required'),
	password: yup.string().required('Password is required'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password')], 'Passwords must match'),
	country: yup.string().required(),
	state: yup.string().required(),
	city: yup.string().required(),
	
});
// location: object()
//     .default(null)
//     .nullable()
//     .shape({
//       country: string().required(),
//       state: string().required(),
//       city: string().required()
//     })