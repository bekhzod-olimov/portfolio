import { Container } from './styles';
import Illustration from '../../assets/ai_developer.jpg';
import pytorch from '../../assets/pytorch.svg';
import tensorflow from '../../assets/tensorflow.svg';
import python from '../../assets/python.svg';
import docker from '../../assets/docker.svg';
import pl from '../../assets/pl_logo.svg';
import js from '../../assets/js.svg';
import django from '../../assets/django.svg';
import huggingface from '../../assets/huggingface.svg';
import numpy from '../../assets/numpy.svg';
import opencv from '../../assets/opencv.svg';
import sklearn from '../../assets/sklearn.png';
import git from '../../assets/git.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const images = [
	pytorch,
	tensorflow,
	python,
	docker,
	pl,
	js,
	django,
	huggingface,
	numpy,
	opencv,
	sklearn,
	git,
];
export function About() {
	return (
		<Container id='about'>
			<div className='about-text'>
				<ScrollAnimation animateIn='fadeInLeft'>
					<h2>Info</h2>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInLeft' delay={0.1 * 1000}>
					<p>
						Hi! I am Bekhzod, an experienced AI/ML engineer with a PhD degree in
						Computer Science & Engineering. My passion is to apply AI techniques
						in various applications to make people's life easier and more
						comfortable.
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInLeft' delay={0.11 * 1000}>
					<h3>Here are my main skills:</h3>
				</ScrollAnimation>

				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '10px',
						marginTop: '20px',
					}}
				>
					{images.map((item, index) => (
						<ScrollAnimation
							key={index}
							animateIn='fadeInLeft'
							delay={index * 0.1 * 1000}
						>
							<div
								style={{
									height: '100px',
									width: '100px',
									borderRadius: '12px',
									padding: '10px',
									background: '#c5c5c5',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
								className='hability'
							>
								<img
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'contain',
									}}
									src={item}
									alt={item}
								/>
							</div>
						</ScrollAnimation>
					))}
				</div>
			</div>
			<div
				style={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				className='about-image'
			>
				<ScrollAnimation animateIn='fadeInRight' delay={0.5 * 1000}>
					<img
						style={{
							borderRadius: '15px',
						}}
						src={Illustration}
						alt='Illustration'
					/>
				</ScrollAnimation>
			</div>
		</Container>
	);
}
