import React, { useContext } from 'react';
import { Context } from '../../Context';
import './next-button.scss';

const NextButton = ({ optionsData }) => {
	const { nextStep } = useContext(Context);

	return (
		<button className='btn--next' onClick={() => nextStep(optionsData)}>
			Sélectionner
		</button>
	);
};

export default NextButton;
