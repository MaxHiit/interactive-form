import React from 'react';
import CardHelp from '../../components/card-help/CardHelp';
import { getHeplData } from '../../data.js';
import './help.scss';

const Help = () => {
	return (
		<div id='help-page'>
			<h1>Avez-vous besoin d'aide pour démonter, protéger vos meubles ou emballer vos cartons ?</h1>
			<ul className='help-card_list'>
				{getHeplData.map((helpData) => {
					return <CardHelp key={helpData.id} data={helpData} />;
				})}
			</ul>
		</div>
	);
};

export default Help;
