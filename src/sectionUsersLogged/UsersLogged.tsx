import React, { useEffect, useId, useState } from 'react';
import styles from './UsersLogged.module.scss';
import axios from 'axios';

interface userData {
	email: string;
	gender: string;
	cell: number;
	name: {
		title: string;
		first: string;
		last: string;
	};
}

const UsersLogged = () => {
	useEffect(() => {
		info();
	}, []);

	const [loggedUser, setLoggedUser] = useState<userData[]>([]);
	const info = () => {
		axios
			.get('https://randomuser.me/api/?results=20')
			.then((res) => {
				console.log(res.data.results);
				setLoggedUser(res.data.results);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			{loggedUser ? loggedUser.map((el) => <div> {el.name.first} </div>) : null}
		</div>
	);
};

export default UsersLogged;

// useEffect
