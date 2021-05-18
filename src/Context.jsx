import React, { useState } from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
	const [step, setStep] = useState([
		{ name: 'step 1', options: {}, isValidate: false },
		{ name: 'step 2', options: {}, isValidate: false },
		{ name: 'step 3', options: {}, isValidate: false }
	]);

	const nextStep = (optionsData) => {
		console.log(optionsData);
		const stepMap = step.map((prevStep, idx) => {
			if (!idx) {
				return { ...prevStep, options: optionsData, isValidate: true };
			}
			return prevStep;
		});
		setStep(stepMap);
	};

	return (
		<Context.Provider
			value={{
				step,
				nextStep
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { ContextProvider, Context };
