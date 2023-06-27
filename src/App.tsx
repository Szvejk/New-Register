import React, { useState } from 'react';
import styles from './App.module.scss';
import SignIn from './Sign/SignIn';
import Register from './Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersLogged from './sectionUsersLogged/UsersLogged';

export type UserList = {
	email: string;
	password: string;
	passwordConfirmation: string;
};

const App = () => {
	const [userList, setUserList] = useState<UserList[]>([]);

	return (
		<Router>
			<Routes>
				
					<Route path='/' element={<SignIn userList={userList} />} />
					<Route path='/register' element={<Register userList={userList} />} />
					<Route path='/logged' element={<UsersLogged/>} />
					<Route path='*' element={<h1>Page not found</h1>} />
				
			</Routes>
		</Router>
	);
};

export default App;
