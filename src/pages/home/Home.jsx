import React from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import { getHomeData } from '../../data.js';
import './home.scss';

const Home = () => {
	return (
		<>
			<Header />
			<main id='home-container'>
				<ul className='space-container'>
					{getHomeData.map((spaceData) => {
						return <Card key={spaceData.name + spaceData.id} data={spaceData} />;
					})}
				</ul>
				<a className='space-link' href='/'>
					Aidez-moi à estimer mon volume de stockage
				</a>
			</main>
		</>
	);
};

export default Home;
