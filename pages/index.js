import Head from 'next/head';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import { Box, Heading, Text, Flex, Link } from '@chakra-ui/react';

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
				<Box m={['10', '10', '20']}>
					<Heading textColor='#fff' mt={10} fontWeight='500'>
						Hey there!
						<br />
						This is Abhishek Ajithkumar.
					</Heading>
					<br />
					<Flex flexDir='row'>
						<Text textColor='#fff' m={1} fontWeight='600' fontSize='3xl'>
							I
						</Text>
						<Text
							textColor='#00ffd1'
							m={1}
							// bgColor='#00ffd1'
							fontWeight='600'
							fontSize='3xl'>
							build
						</Text>
						<Text m={1} textColor='#fff' fontWeight='600' fontSize='3xl'>
							and
						</Text>
						<Text
							// bgColor='#00ffd1'
							textColor='#00ffd1'
							m={1}
							fontWeight='600'
							fontSize='3xl'>
							design
						</Text>
						<Text textColor='#fff' m={1} fontWeight='600' fontSize='3xl'>
							stuff
						</Text>
						<Text textColor='#fff' m={1} fontWeight='600' fontSize='3xl'>
							for
						</Text>
						<Text textColor='#fff' m={1} fontWeight='600' fontSize='3xl'>
							the
						</Text>
					</Flex>
					<Heading textColor='#00ffd1'>WEB and MOBILE</Heading>
					<br />
					<Text textColor='#fff' fontSize='lg' mt={10}>
						<Link
							as='mark'
							bgColor='#00ffd1'
							textColor='#000'
							href='mailto:abhishek@a20hek.com'>
							Email me
						</Link>
						&nbsp;if you think we should be working together on interesting projects
					</Text>
					<br />

					<Text textColor='#fff' fontSize='2xl' fontWeight='600'>
						also, I run a{' '}
						<Link textColor='#00ffd1' href='/blog'>
							blog
						</Link>{' '}
						where I write sometimes. <br />
						Don’t forget to check it out {':)'}
					</Text>
				</Box>
			</Box>
		</motion.div>
	);
}
