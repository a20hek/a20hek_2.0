import Head from 'next/head';
import Navbar from './components/Navbar';

export default function Home() {
	return (
		<div className='App'>
			<Head>
				<title>
					Abhishek Ajithkumar | Web Developer | UI/UX Designer | Welcome to a20hek.com
				</title>
			</Head>
			<Navbar />
			<br />
			<br />
			<br />

			<div className='hero'>
				<h1 className='intro'>
					Hey there!
					<br /> This is Abhishek Ajithkumar
				</h1>
				<br />
				<br />
				<br />
				<p className='intro2'>I specialize in</p>
				<h1 className='intro3'>
					PRODUCT DESIGN, & <br />
					WEB DEVELOPMENT <br />
				</h1>
				<br />
				<p className='contact'>
					<a href='mailto:abhishek@a20hek.com' className='email'>
						Email me
					</a>
					&nbsp;if you think we should be working together on interesting projects
				</p>
				<br />
				<br />
				<h1 className='blog'>
					oooh ooh and also, I run a <a href='/blog'>blog</a> where I write about
					everything under the sun that interests me. Don’t forget to check it out {':)'}
				</h1>
			</div>
		</div>
	);
}
