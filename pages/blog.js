import { getblogPosts } from './api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';
import Head from 'next/head';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Mailchimp from 'react-mailchimp-form';
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
	const [showModal, setShowModal] = useState(false);
	return (
		<div>
			<Head>
				<title>The a20hek Blog by Abhishek Ajithkumar</title>
			</Head>
			<Navbar />
			<button className='sub-btn' onClick={() => setShowModal(!showModal)}>
				<span>SUBSCRIBE</span>
			</button>

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
