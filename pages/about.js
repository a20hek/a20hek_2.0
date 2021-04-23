import Navbar from './components/Navbar';

export default function about() {
	return (
		<div>
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
					dweller. I am into a lot of stuff ranging from code and design to blockchain,
					finance, philosophy, writing, sales yada yada- learning bits and pieces about
					stuff that I like as days pass.
					<br />
					By skillset, I'm a web developer and UI/UX designer. I love solving problems by
					building stuff and by helping others build cool stuff.
					<br />
					<br /> Also, I love writing and sharing stuff I learn, and maybe that's the
					reason for me starting this blog. Plus, the idea of having a space of your own
					on the internet does sound cool :D.
					<br />
					You can reach out to me through Twitter DMs, or maybe just an email to
					abhishek@a20hek.com would suffice.
				</p>
			</div>
		</div>
	);
}
