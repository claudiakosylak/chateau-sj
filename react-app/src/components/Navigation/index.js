import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className="header">
			<h1>Chateau San Jose</h1>
			{/* <li>
				<NavLink exact to="/">Home</NavLink>
			</li>
			{isLoaded && (
				<li>
					<ProfileButton user={sessionUser} />
				</li>
			)} */}
			<div className="header-right">
				<p className="phone">(559) 555-5555</p>
				<ProfileButton />
			</div>
		</div>
	);
}

export default Navigation;
