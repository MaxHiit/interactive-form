import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import SpaceRecap from './pages/spaceRecap/SpaceRecap';
import Help from './pages/help-page/Help';

export const App = () => {
	return (
		<>
			<Switch>
				<Route path='/help'>
					<Help />
				</Route>
				<Route path='/space-recap'>
					<SpaceRecap />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</>
	);
};

export default App;
