import React from 'react';
import NextButton from '../../components/next-button/NextButton';
import { stepIndexes } from '../../data';
import './card-help.scss';

const CardHelp = ({ data }) => {
	return (
		<li className='help-card_item'>
			<div className='help-card__content-container'>
				<div className='help-card__img-wrapper'>
					<img src={data.srcImage} alt='gilbert-placard' />
				</div>
				<h2 className='help-card__title'>{data.title}</h2>
				<p className='help-card__text'>{data.text}</p>
			</div>
			<div className='help-card__action-container'>
				<p className='action-container__text'>{data.textBadge}</p>
				<NextButton
					srcNextStep='/'
					optionsData={{ isNeedHelp: data.getHelp }}
					stepIndex={stepIndexes.help}
				/>
			</div>
		</li>
	);
};

export default CardHelp;
