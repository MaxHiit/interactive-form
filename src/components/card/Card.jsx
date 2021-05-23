import React from 'react';
import NextButton from '../next-button/NextButton';
import { stepIndexes } from '../../data';
import './Card.scss';

const Card = ({ data }) => {
	return (
		<li className='card'>
			<div className='card--img-wrapper'>
				<img src={data.src} alt='gilbert-placard' />
			</div>
			<h2 className='card--name'>{data.name}</h2>
			<p className='card--desc'>{data.description}</p>
			<p className='card--detail'>
				Espace de stockage: {data.stockageSpaceDetail} <br /> ({data.m3Storage}m3)
			</p>
			<NextButton
				srcNextStep='/space-recap'
				optionsData={{
					stockageStorageDetail: data.stockageSpaceDetail,
					stockageM3Storage: data.m3Storage,
					stockageStorageName: data.name,
					stockageStoragePrice: data.price
				}}
				stepIndex={stepIndexes.home}
			/>
			<h3 className='card--price'>{data.price}€/mois</h3>
		</li>
	);
};

export default Card;

// TODO Tunr in a generic card  for reuse components in all app
