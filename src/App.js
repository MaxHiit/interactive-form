import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';

export const App = () => {
	return (
		<>
			<Switch>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</>
	);
};

export default App;
