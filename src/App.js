import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';

export const App = () => {
	const [step, setStep] = useState([
		{ name: 'step 1', options: {}, isValidate: false },
		{ name: 'step 2', options: {}, isValidate: false },
		{ name: 'step 3', options: {}, isValidate: false }
	]);

	return (
		<>
			<Switch>
				<Route path='/'>
					<Home setStep={setStep} step={step} />
				</Route>
			</Switch>
		</>
	);
};

export default App;
