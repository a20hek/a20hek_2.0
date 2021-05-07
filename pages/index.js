import Head from 'next/head';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

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
			<Navbar />
			<br />
			<br />
			<br />
			<div className='hero'>
				<h1 className='intro'>
					Hey there!
					<br /> This is Abhishek Ajithkumar.
				</h1>
				<p className='intro2'>
					I <span className='intro-span'>build</span> and{' '}
					<span className='intro-span'>design</span> stuff for the
				</p>
				<h1 className='intro3'>
					WEB <span className='web-and'>and</span> MOBILE <br />
				</h1>
				<br />
				<p className='contact'>
					<a href='mailto:abhishek@a20hek.com' className='email'>
						Email me
					</a>
					&nbsp;if you think we should be working together on interesting projects
				</p>
				<h1 className='blog'>
					oooh ooh and also, I run a <a href='/blog'>blog</a> where I write about
					everything under the sun that interests me. Don’t forget to check it out {':)'}
				</h1>
			</div>
		</motion.div>
	);
}
