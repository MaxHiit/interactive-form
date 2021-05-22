import React, { isValidElement, useContext } from 'react';
import { Context } from '../../Context';
import NextButton from '../../components/next-button/NextButton';
import srcSpaceRecap from '../../images/space-recap.png';
import Lock from '../../components/icon/Lock';
import SecurityCamera from '../../components/icon/SecurityCamera';
import MotionSensor from '../../components/icon/MotionSensor';
import Fire from '../../components/icon/Fire';
import Sun from '../../components/icon/Sun';
import Check from '../../components/icon/Check';
import './space-recap.scss';

const SpaceRecap = () => {
	const { step } = useContext(Context);
	return (
		<div id='space-recap-container' className='container'>
			<h1>Votre tarif de stockage</h1>
			<div className='img-wrapper'>
				<img src={srcSpaceRecap} alt='box de stockage contenant des cartons' />
			</div>
			<div className='storage-detail'>
				{step.map((stepData, idx) => {
					if (stepData.name === 'step 1') {
						return (
							<div key={idx}>
								<p className='storage__detail--price'>{stepData.options.price}€/mois</p>
								<p className='storage__detail--m3Storage'>
									Pour un volume de {stepData.options.m3Storage}m3
								</p>
							</div>
						);
					}
				})}
				<p className='storage__detail--good-news'>
					Bonne nouvelle ! <br />
					Vous économisez 30% par rapport à un box de stockage traditionnel de taille équivalente.
				</p>
			</div>
			<div className='storage-benefit'>
				<div className='benefit-detail'>
					<p>Les + de Gilbert</p>
					<div className='benefit-detail'>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<Check />
							</figure>
							<p className='benefit__text-green'>Double périmètre de sécurité</p>
						</div>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<Check />
							</figure>
							<p className='benefit__text-green'>Vidéo surveillance 24h/24</p>
						</div>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<Check />
							</figure>
							<p className='benefit__text-green'>Détecteur de mouvement</p>
						</div>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<Check />
							</figure>
							<p className='benefit__text-green'>Système anti-incendie</p>
						</div>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<Check />
							</figure>
							<p className='benefit__text-green'>Suivi température et humidité 7j/7</p>
						</div>
					</div>
				</div>
				<div className='benefit-included'>
					<p>Vos affaires en toute sécurité</p>
					<div className='benefit-inclued'>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<Lock />
							</figure>
							<p>Double périmètre de sécurité</p>
						</div>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<SecurityCamera />
							</figure>
							<p>Vidéo surveillance 24h/24</p>
						</div>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<MotionSensor />
							</figure>
							<p>Détecteur de mouvement</p>
						</div>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<Fire />
							</figure>
							<p>Système anti-incendie</p>
						</div>
						<div className='benefit'>
							<figure className='benefit__icon'>
								<Sun />
							</figure>
							<p>Suivi température et humidité 7j/7</p>
						</div>
					</div>
				</div>
			</div>
			<NextButton srcNextStep='/help' />
		</div>
	);
};

export default SpaceRecap;
