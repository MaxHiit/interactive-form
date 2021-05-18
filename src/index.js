import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './Context';
import App from './App';
import './styles/index.scss';

render(
	<ContextProvider>
		<Router>
			<App />
		</Router>
	</ContextProvider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
