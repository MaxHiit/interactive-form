import React from 'react';
import Header from '../../components/header/Header';
import CardInfo from '../../components/card/CardInfo';
import './home.scss';
import srcGilbert from '../../images/gimbert-color.png';

const Home = () => {
	const getSpaceData = [
		{
			id: 0,
			name: 'Placard',
			description: `Idéal si vous n'avez que quelques affaires à stocker. Parfait pour quelques cartons ou valises.`,
			src: srcGilbert,
			stockageSpaceDetail: '0.5m x 1m x 1m',
			m3Storage: '0.5',
			price: 24
		},
		{
			id: 1,
			name: 'Cave',
			description: `Idéal pour une quinzaine de cartons ou des petits meubles. Parfait pour libérer une pièces !`,
			src: srcGilbert,
			stockageSpaceDetail: '1.5m x 1m x 1m',
			m3Storage: '1.5',
			price: 36
		},
		{
			id: 2,
			name: 'Placard',
			description: `Convient pour des meubles de taille moyenne telles qu'une table, des chaises, un, réfrigérateur, etc.`,
			src: srcGilbert,
			stockageSpaceDetail: '3m x 1m x 1m',
			m3Storage: '3',
			price: 54
		}
	];
	return (
		<>
			<Header />
			<main id='home-container'>
				<ul className='space-container'>
					{getSpaceData.map((spaceData) => {
						return <CardInfo key={spaceData.name + spaceData.id} data={spaceData} />;
					})}
				</ul>
				<a className='space-link' href=''>
					Aidez-moi à estimer mon volume de stockage
				</a>
			</main>
		</>
	);
};

export default Home;
