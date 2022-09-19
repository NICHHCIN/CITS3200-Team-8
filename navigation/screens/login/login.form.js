import * as yup from 'yup';

export const loginform = yup.object().shape({
	email: yup.string().required("Required paramter").email("Invalid email"),
	password: yup.string().required("Required paramter")
})