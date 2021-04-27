import Head from 'next/head';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

export default function Home() {
	const line1 = 'Hey there!';
	const line2 = ' This is Abhishek Ajithkumar';
	const line3 = 'I specialize in';
	const line4 = 'PRODUCT DESIGN, & ';
	const line5 = 'WEB DEVELOPMENT';
	const sentence = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delay: 0.5,
				staggerChildren: 0.08,
			},
		},
	};

	const letter = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};
	return (
		<motion.div className='App' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta
					name='description'
					content='Personal website and blog of Abhishek Ajithkumar. I write about finance, code, design, blockchain , psychology and much more.'
				/>
				<title>Abhishek Ajithkumar | Web Developer | UI/UX Designer | a20hek.com</title>
			</Head>
			<Navbar />
			<br />
			<br />
			<br />
			<div className='hero'>
				<motion.h1 variants={sentence} initial='hidden' animate='visible'>
					{line1.split('').map((char, index) => {
						return (
							<motion.span
								className='intro'
								key={char + '-' + index}
								variants={letter}>
								{char}
							</motion.span>
						);
					})}
					<br />
					{line2.split('').map((char, index) => {
						return (
							<motion.span
								className='intro'
								key={char + '-' + index}
								variants={letter}>
								{char}
							</motion.span>
						);
					})}
					<br />
					<br />
					{line3.split('').map((char, index) => {
						return (
							<motion.span
								className='intro2'
								key={char + '-' + index}
								variants={letter}>
								{char}
							</motion.span>
						);
					})}
					<br />
					{line4.split('').map((char, index) => {
						return (
							<motion.span
								className='intro3'
								key={char + '-' + index}
								variants={letter}>
								{char}
							</motion.span>
						);
					})}
					<br />
					{line5.split('').map((char, index) => {
						return (
							<motion.span
								className='intro3'
								key={char + '-' + index}
								variants={letter}>
								{char}
							</motion.span>
						);
					})}
				</motion.h1>
				<motion.p className='intro2' variants={sentence} initial='hidden' animate='visible'>
					{/* I specialize in */}
				</motion.p>
				{/* <h1 className='intro3'>
					PRODUCT DESIGN, & <br />
					WEB DEVELOPMENT <br />
				</h1> */}
				<br />
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 7 }}
					className='contact'>
					<a href='mailto:abhishek@a20hek.com' className='email'>
						Email me
					</a>
					&nbsp;if you think we should be working together on interesting projects
				</motion.p>
				<br />
				<br />
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 8 }}
					className='blog'>
					oooh ooh and also, I run a <a href='/blog'>blog</a> where I write about
					everything under the sun that interests me. Don’t forget to check it out {':)'}
				</motion.h1>
			</div>
		</motion.div>
	);
}
