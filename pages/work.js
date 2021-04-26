import { getworkPosts } from './api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

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
			<Navbar />
			<div className='post-grid'>
				{props.posts.map((post) => {
					var date = dateFormat(post.created_at, 'dd mmmm yyyy');
					return (
						<li key={post.id}>
							<Link href='/workpost/[slug]' as={`/workpost/${post.slug}`}>
								<div className='post-container'>
									<img className='blog-card-img' src={post.feature_image} />
									<p className='date'>
										{date} • {post.reading_time} minute read
									</p>
									<p className='post-title'>{post.title}</p>
									<p className='excerpt'>{post.excerpt}</p>
									<br />
								</div>
							</Link>
						</li>
					);
				})}
			</div>
		</motion.div>
	);
}
