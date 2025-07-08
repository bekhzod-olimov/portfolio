import { BrowserRouter } from 'react-router-dom';
import { Container } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';
import bekhzod from '../../assets/bekhzod.png';
import { NavHashLink } from 'react-router-hash-link';
import linkedin from '../../assets/linkedin.svg';
import kaggle from '../../assets/kaggle.svg';
import githubIcon from '../../assets/github.svg';
import kakao from '../../assets/kakao.png';
import Hello from '../../assets/Hello.gif';
import telegram from '../../assets/telegram.svg';
import instagramIcon from '../../assets/instagram.svg'

const images = [linkedin, kaggle, githubIcon, instagramIcon, kakao, telegram];
const links = ["https://www.linkedin.com/in/bekhzod-olimov-phd-33059bb1/", 
			   "https://www.kaggle.com/killa92", 
			   "https://github.com/bekhzod-olimov", 
			   "https://www.instagram.com/beki___oli/",
			   "https://drive.google.com/file/d/14C7KpoTdY2aJBpx5LdKTKRu4R2e_PoSK/view?usp=sharing", 
			   "https://t.me/bekhzodAI"];

export function Hero() {
	return (
		<Container id='home'>
			<div
				style={{
					flex: 1,
				}}
				className='hero-text'
			>
				<ScrollAnimation animateIn='fadeInUp'>
					<p>
						Hi, there <img src={Hello} alt='Hi, there' width='20px' /> I am
					</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInUp' delay={0.2 * 1000}>
					<h1>Bekhzod Olimov</h1>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInUp' delay={0.4 * 1000}>
					<h3>A Senior AI Engineer & Researcher</h3>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInUp' delay={0.6 * 1000}>
					<p className='small-resume'>with 6+ years of experience in AI (ML/DL)</p>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInUp' delay={0.8 * 1000}>
					<BrowserRouter>
						<NavHashLink smooth to='#contact' className='button'>
							Contact
						</NavHashLink>
					</BrowserRouter>
				</ScrollAnimation>
				<ScrollAnimation animateIn='fadeInUp' delay={1 * 1000}>
					
					<div
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '10px',
							marginTop: '30px',
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
									<a href={links[index]} target="_blank" rel="noopener noreferrer">
										<img
											style={{
											width: '100%',
											height: '100%',
											objectFit: 'contain',
											}}
											src={item}
											alt={item}
										/>
										</a>
								</div>
							</ScrollAnimation>
						))}
					</div>
					
				</ScrollAnimation>
			</div>
			<div
				style={{
					flex: '1',
					display: 'flex',
					justifyContent: 'center',
				}}
				className='hero-image'
			>
				<ScrollAnimation animateIn='fadeInRight' delay={0.2 * 1000}>
					<img
						style={{
							borderRadius: '15px',
						}}
						src={bekhzod}
						alt='profile_pic'
					/>
				</ScrollAnimation>
			</div>
		</Container>
	);
}
