import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded, onAboutPress }) {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<div className="header">
			<h1>Chateau San Jose</h1>
			<div className="header-right">
				<p className="phone">(559) 555-5555</p>
				<ProfileButton
				onAboutPress={onAboutPress}
				/>
			</div>
		</div>
	);
}

export default Navigation;
