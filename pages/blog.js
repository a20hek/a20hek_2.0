import { getblogPosts } from './api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';
import Head from 'next/head';
import Navbar from './components/Navbar';

export async function getStaticProps(context) {
	const posts = await getblogPosts();

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: { posts },
	};
}

export default function blog(props) {
	return (
		<div>
			<Head>
				<title>The a20hek Blog by Abhishek Ajithkumar</title>
			</Head>
			<Navbar />
			<button className='sub-btn'>
				<span>SUBSCRIBE</span>
			</button>
			<div className='post-grid'>
				{props.posts.map((post) => {
					var date = dateFormat(post.published_at, 'dd mmmm yyyy');
					return (
						<li key={post.slug}>
							<Link href='/blogpost/[slug]' as={`/blogpost/${post.slug}`}>
								<div className='post-container'>
									<img className='blog-card-img' src={post.feature_image} />
									<p className='date'>
										{date} • {post.reading_time} minute read
									</p>
									<p className='post-title'>{post.title}</p>
									<p className='excerpt'>{post.excerpt}</p>
								</div>
							</Link>
						</li>
					);
				})}
			</div>
		</div>
	);
}
