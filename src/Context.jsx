import React, { useState } from 'react';
const Context = React.createContext();

const ContextProvider = ({ children }) => {
	const [step, setStep] = useState([
		{ name: 'step 1', options: {} },
		{ name: 'step 2', options: {} },
		{ name: 'step 3', options: {} }
	]);

	const nextStep = (optionsData = null, stepIndex) => {
		const stepMap = step.map((prevStep, idx) => {
			if (idx === stepIndex) {
				return { ...prevStep, options: optionsData };
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
