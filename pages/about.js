import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function about() {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta name='description' content='About Abhishek Ajithkumar' />
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
				<title>About Abhishek Ajithkumar</title>
			</Head>
			<Navbar />
			<div>
				<br />
				<br />
				<br />
				<h1 className='about'>About</h1>
				<br />
				<br />
				<p className='aboutxt'>
					I’m Abhishek Ajithkumar, a 19-year-old homo sapiens, and fellow internet
					dweller. I am into a lot of stuff ranging from code and design to, finance,
					philosophy, writing etc. - learning bits and pieces about stuff that I like as
					days pass.
					<br />
					By skillset, I'm a web developer and UI/UX designer. I love solving problems by
					building stuff and by helping others build cool stuff.
					<br />
					<br /> Also, I love writing and sharing stuff that I learn, and maybe that's the
					reason for me starting this blog. Plus, the idea of having a space of your own
					on the internet does sound cool :D.
					<br />
					You can reach out to me through Twitter DMs, or maybe just an email to
					abhishek@a20hek.com would suffice.
				</p>
			</div>
		</motion.div>
	);
}
