import { getworkPosts } from './api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import Head from 'next/head';

export async function getStaticProps(context) {
	const posts = await getworkPosts();

	if (!posts) {
		return {
			notFound: true,
		};
	}

	return {
		props: { posts },
	};
}

export default function work(props) {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Head>
				<title>My Work-Abhishek Ajithkumar</title>
			</Head>
			<Navbar />
			<div className='post-grid'>
				{props.posts.map((post) => {
					var date = dateFormat(post.created_at, 'dd mmmm yyyy');
					return (
						<li key={post.id}>
							<Link href='/workpost/[slug]' as={`/workpost/${post.slug}`}>
								<a target='_blank' rel='noreferrer'>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className='post-container'>
										<img className='blog-card-img' src={post.feature_image} />
										<p className='date'>
											{date} • {post.reading_time} minute read
										</p>
										<p className='post-title'>{post.title}</p>
										<p className='excerpt'>{post.excerpt}</p>
									</motion.div>
								</a>
							</Link>
						</li>
					);
				})}
			</div>
		</motion.div>
	);
}
