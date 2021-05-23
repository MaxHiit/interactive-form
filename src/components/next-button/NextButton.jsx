import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../Context';
import './next-button.scss';

const NextButton = ({ srcNextStep, optionsData, stepIndex }) => {
	const { nextStep } = useContext(Context);

	return (
		<Link to={srcNextStep}>
			<button className='btn--next' onClick={() => nextStep(optionsData, stepIndex)}>
				Sélectionner
			</button>
		</Link>
	);
};

export default NextButton;
