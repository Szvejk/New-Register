import React, { useState } from 'react';
import styles from './App.module.scss';
import SignIn from './Sign/SignIn';
import Register from './Register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersLogged from './sectionUsersLogged/UsersLogged';
import Details from './Details/Details';

export type UserList = {
	email: string;
	password: string;
	passwordConfirmation: string;
};

interface UserData {
	email: string;
	gender: string;
	cell: number;

	name: {
		title: string;
		first: string;
		last: string;
	};
}

const App = () => {
	const [userList, setUserList] = useState<UserList[]>([]);
	const [detailsUser, setdetailsUser] = useState<UserData | null>(null);

	console.log(detailsUser);
	return (
		<Router>
			<Routes>
				<Route path='/' element={<SignIn userList={userList} />} />
				<Route path='/register' element={<Register userList={userList} />} />
				<Route
					path='/logged'
					element={<UsersLogged setdetailsUser={setdetailsUser} />}
				/>
				<Route
					path='/details'
					element={<Details detailsUser={detailsUser} />}
				/>
				<Route path='*' element={<h1>Page not found</h1>} />
			</Routes>
		</Router>
	);
};

export default App;
