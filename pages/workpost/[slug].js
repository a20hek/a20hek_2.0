import { getSinglePost, getworkPosts } from '../api/ghost_data';
import Link from 'next/link';
import dateFormat from 'dateformat';
import { motion } from 'framer-motion';
import Head from 'next/head';

export async function getStaticPaths() {
	const posts = await getworkPosts();
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
	return (
		<div className='blogpost'>
			<Head>
				<title>{props.post.title}-Abhishek Ajithkumar</title>
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
		</div>
	);
}
