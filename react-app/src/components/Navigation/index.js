import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded, onHomePress, onAboutPress, onFloorPlanPress, onContactPress }) {
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory();

	return (
		<div className="header">
			<h1>Chateau San Jose</h1>
			<div className="header-right">
				<p className="phone">(559) 555-5555</p>
				<ProfileButton
				onHomePress={onHomePress}
				onAboutPress={onAboutPress}
				onFloorPlanPress={onFloorPlanPress}
				onContactPress={onContactPress}
				/>
			</div>
		</div>
	);
}

export default Navigation;
