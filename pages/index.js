import Head from 'next/head';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {
	return (
		<motion.div className='App' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta
					name='description'
					content="Personal website and blog of Abhishek Ajithkumar. I'm a Web Developer, App Developer & UI/UX Designer. Also, I run a blog where I write about finance, code, design, blockchain , psychology and much more."
				/>
				<meta name='robots' content='noindex, nofollow' />
				<meta name='googlebot' content='noindex, nofollow' />
				<meta name='bingbot' content='noindex, nofollow' />
				<meta name='duckduckbot' content='noindex, nofollow' />
				<meta name='canonical' href='a20hek.com' />
				<meta
					name='keywords'
					content='Abhishek, Abhishek Ajithkumar, a20hek, Abhishek Ajith,  Web Developer, React.js, Next.js, React, React Native, Javascript, Blockchain, Cryptocurrency, Finance, UI/UX designer, Product Design, India, startups, Responsive design, MERN '
				/>
				<meta name='author' content='Abhishek Ajithkumar' />

				<title>Abhishek Ajithkumar | Web Developer | UI/UX Designer | a20hek.com</title>
			</Head>
			<Box height='100vh' bg='#1c1c1c'>
				<Navbar />
				<br />
				<br />
				<br />
				<Heading textColor='#ffffff'>
					Hey there!
					<br /> This is Abhishek Ajithkumar.
				</Heading>
				<Text textColor='#ffffff'>
					I <span>build</span> and <span>design</span> stuff for the
				</Text>
				<Heading textColor='#ffffff'>
					WEB <span>and</span> MOBILE <br />
				</Heading>
				<br />
				<Text textColor='#ffffff'>
					<a href='mailto:abhishek@a20hek.com'>Email me</a>
					&nbsp;if you think we should be working together on interesting projects
				</Text>
				<Text textColor='#ffffff'>
					oooh ooh and also, I run a <a href='/blog'>blog</a> where I write about
					everything under the sun that interests me. Don’t forget to check it out {':)'}
				</Text>
			</Box>
		</motion.div>
	);
}
