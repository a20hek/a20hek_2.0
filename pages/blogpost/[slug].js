import { getSinglePost, getblogPosts } from '../api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';
import Mailchimp from 'react-mailchimp-form';
import { motion } from 'framer-motion';
import Head from 'next/head';

export async function getStaticPaths() {
	const posts = await getblogPosts();
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));
	return { paths, fallback: false };
}

export async function getStaticProps(context) {
	const post = await getSinglePost(context.params.slug);

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: { post },
		revalidate: 60,
	};
}

export default function postpage(props) {
	var date = dateFormat(props.post.published_at, 'dd mmmm yyyy');
	function handleScroll() {
		window.scroll({
			top: document.body.offsetHeight,
			left: 0,
			behavior: 'smooth',
		});
	}
	return (
		<div className='blogpost'>
			<Head>
				<title>{props.post.title} - Abhishek Ajithkumar</title>
				<meta name='description' content={props.post.excerpt} />
			</Head>
			<div className='bp-header'>
				<Link href='/blog'>
					<motion.h4
						whileHover={{ scale: 1.025 }}
						whileTap={{ scale: 0.95 }}
						className='back'>
						{'<'} Go Back
					</motion.h4>
				</Link>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					className='sub-btn'
					id='post'
					onClick={handleScroll}>
					<span>SUBSCRIBE</span>
				</motion.button>
			</div>
			<h1 className='bp-title'>{props.post.title}</h1>
			<br />
			<h1 className='bp-excerpt'>{props.post.excerpt}</h1>
			<br />
			<p className='bp-info'>
				{date} • {props.post.reading_time} minute read
			</p>
			<img className='bp-img' src={props.post.feature_image} />
			<div className='bp-txt' dangerouslySetInnerHTML={{ __html: props.post.html }} />
			<div className='subnews'>
				<h2>Subscribe to my blog!</h2>
				<p>
					If you liked this article, chances are that you'll love my other stuff too. So,
					to remain updated with my posts, drop your email below {':)'}
				</p>
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
	);
}
