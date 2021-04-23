import React, { useState } from 'react';
export default function Navbar() {
	const [modal, setModal] = useState(false);
	return (
		<div className='header'>
			<p className='a20hek'>
				<a className='logo' href='/#'>
					a20hek
				</a>
			</p>
			<svg
				onClick={() => setModal(!modal)}
				className='toggle-icon'
				width='24'
				height='21'
				viewBox='0 0 24 21'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<rect width='24' height='3' rx='1.5' fill='#00FFD1' />
				<rect y='6' width='24' height='3' rx='1.5' fill='#00FFD1' />
				<rect y='12' width='24' height='3' rx='1.5' fill='#00FFD1' />
				<rect y='18' width='24' height='3' rx='1.5' fill='#00FFD1' />
			</svg>
			<div className='overlay' id={modal ? 'hidden' : ''}>
				<img src='/close-teal.svg' className='close-btn' onClick={() => setModal(!modal)} />
				<ul className='overlay-links'>
					<li>
						<a className='ola' href='/blog'>
							blog
						</a>
					</li>
					<li>
						<a className='ola' href='/work'>
							work
						</a>
					</li>
					<li>
						<a className='ola' href='mailto:abhishek@a20hek.com'>
							contact
						</a>
					</li>
					<li>
						<a className='ola' href='/about'>
							about
						</a>
					</li>
				</ul>
			</div>
			<div>
				<ul className='nav'>
					<li>
						<a id='bloglink' href='/blog'>
							blog
						</a>
					</li>
					<li>
						<a href='/work'>work</a>
					</li>
					<li>
						<a href='mailto:abhishek@a20hek.com'>contact</a>
					</li>
					<li>
						<a href='/about'>about</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
