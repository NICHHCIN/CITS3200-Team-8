import React from 'react';
import LoginScreen from '../login.screen';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {loginform} from '../login.form';

describe('Login screen', () => {

	it('homepage',async() => {
		const navigation = {navigate: () => {}}
		spyOn(navigation, 'navigate');
		
		const page = render(<LoginScreen navigation={navigation}/>);
		
		const email = page.getByTestId("email");
		const password = page.getByTestId("password");
		fireEvent.changeText(email, "example@example.com");
		fireEvent.changeText(password, "example");
		
		const login = page.getByTestId('login');
		
		fireEvent.press(login);
		
		await waitFor(() => expect(navigation.navigate).toHaveBeenCalledWith("Announcements"));
	})
	
	it('empty email error', () => {
		const formValues = {email:""};
	
		expect(loginform.isValidSync(formValues)).toBeFalsy();
	})
	
	it('empty password error', () => {
		const formValues = {password:"", email:"example@example.com"};
	
		expect(loginform.isValidSync(formValues)).toBeFalsy();
	})
	
	it('invalid email error', () => {
		const formValues = {email: "invalid"};
		
		expect(loginform.isValidSync(formValues)).toBeFalsy();
	})
	
	it('Valid form', () => {
	const formValues = {password: "example", email: "example@example.com"};
	
	expect(loginform.isValidSync(formValues)).toBeTruthy();
    })
	
})