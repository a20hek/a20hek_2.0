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
		revalidate: 60,
	};
}

export default function work(props) {
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta
					name='description'
					content="Abhishek Ajithkumar's Work in Development and Design"
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
