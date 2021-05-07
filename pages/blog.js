import { getblogPosts } from './api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';
import Head from 'next/head';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Mailchimp from './components/Mailchimp';
import { motion } from 'framer-motion';
export async function getStaticProps(context) {
	const posts = await getblogPosts();

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

export default function blog(props) {
	const [showModal, setShowModal] = useState(false);
	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='blogpg'>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta
					name='description'
					content='Blog of Abhishek Ajithkumar. I write about finance, code, design, blockchain , psychology and much more.'
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
				<title>The a20hek Blog</title>
			</Head>
			<Navbar />
			<motion.button
				className='sub-btn'
				onClick={() => setShowModal(!showModal)}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}>
				<span>SUBSCRIBE</span>
			</motion.button>

			<div className='sub-modal' id={showModal ? 'hidden' : ''}>
				<div className='modal'>
					<img
						src='/close-teal.svg'
						className='close-btn'
						id='sub'
						onClick={() => setShowModal(!showModal)}
					/>
					<div className='modal-container'>
						<img src='/email-teal.svg' className='mail-icon' />
						<p>Enter your email address to get new posts straight to your inbox!</p>
						<Mailchimp
							className='form'
							action='https://a20hek.us1.list-manage.com/subscribe/post?u=afeb5bcfa8b0259f5e87b6d27&amp;id=0dfa88c50a'
							fields={[
								{
									name: 'EMAIL',
									placeholder: 'Email',
									type: 'email',
									required: true,
								},
							]}
						/>
					</div>
				</div>
			</div>
			<div className='post-grid'>
				{props.posts.map((post) => {
					var date = dateFormat(post.published_at, 'dd mmmm yyyy');
					return (
						<li key={post.slug}>
							<Link
								href='/blogpost/[slug]'
								as={`/blogpost/${post.slug}`}
								passHref={true}>
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
