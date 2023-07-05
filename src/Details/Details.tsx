import React from 'react';

import { UserList } from '../App';

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

interface Props {
	detailsUser: UserData | null;
}

const Details = ({ detailsUser }: Props) => {
	return <div>

	</div>;
};

export default Details;
