import srcHome from './images/gimbert-color.png';
import srcNoHelp from './images/no-help-1.svg';
import srcYesHelp from './images/yes-help-1.svg';

export const stepIndexes = {
	home: 0,
	space_recap: 1,
	help: 2
};

export const getHomeData = [
	{
		id: 0,
		name: 'Placard',
		description: `Idéal si vous n'avez que quelques affaires à stocker. Parfait pour quelques cartons ou valises.`,
		src: srcHome,
		stockageSpaceDetail: '0.5m x 1m x 1m',
		m3Storage: '0.5',
		price: 24
	},
	{
		id: 1,
		name: 'Cave',
		description: `Idéal pour une quinzaine de cartons ou des petits meubles. Parfait pour libérer une pièces !`,
		src: srcHome,
		stockageSpaceDetail: '1.5m x 1m x 1m',
		m3Storage: '1.5',
		price: 36
	},
	{
		id: 2,
		name: 'Placard',
		description: `Convient pour des meubles de taille moyenne telles qu'une table, des chaises, un, réfrigérateur, etc.`,
		src: srcHome,
		stockageSpaceDetail: '3m x 1m x 1m',
		m3Storage: '3',
		price: 54
	}
];

export const getHeplData = [
	{
		id: 0,
		title: 'Yes, I need help',
		text:
			"Notre équipe se chargera de démonter et d'emballer vos articles. Fournitures d'emballage illimitées incluses.",
		srcImage: srcYesHelp,
		textBadge: 'Effortless',
		getHelp: true
	},
	{
		id: 1,
		title: "No, I'll do it myself",
		text:
			'Emballez vos articles et notre équipe vous retrouvera sur le trottoir pour les charger dans notre camion.',
		srcImage: srcNoHelp,
		textBadge: 'Do-it-yoursel',
		getHelp: false
	}
];
