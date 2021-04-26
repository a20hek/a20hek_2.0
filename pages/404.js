import Link from 'next/link';

export default function Custom404() {
	return (
		<div className='four-o-four'>
			<div>
				<h1>404 not found</h1>
				<Link href='/'>
					<a>
						<button>
							<span>Go Back Home</span>
						</button>
					</a>
				</Link>
			</div>
			<img src='/404.svg' />
		</div>
	);
}
