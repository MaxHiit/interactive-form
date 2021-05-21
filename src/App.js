import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import SpaceRecap from './pages/spaceRecap/SpaceRecap';

export const App = () => {
	return (
		<>
			<Switch>
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
